"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon, Clock, VideoIcon, Check, Clipboard } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format, addDays, addHours, startOfHour } from "date-fns";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

// Expanded time slots with more options
const timeSlots = Array.from({ length: 24 }, (_, i) => {
  const hour = i;
  return [
    {
      value: `${hour}:00`,
      label: `${hour === 0 ? 12 : hour > 12 ? hour - 12 : hour}:00 ${
        hour >= 12 ? "PM" : "AM"
      }`,
    },
    {
      value: `${hour}:30`,
      label: `${hour === 0 ? 12 : hour > 12 ? hour - 12 : hour}:30 ${
        hour >= 12 ? "PM" : "AM"
      }`,
    },
  ];
}).flat();

const durations = [
  { value: "15", label: "15 minutes" },
  { value: "30", label: "30 minutes" },
  { value: "45", label: "45 minutes" },
  { value: "60", label: "1 hour" },
  { value: "90", label: "1.5 hours" },
  { value: "120", label: "2 hours" },
];

export default function ZoomScheduler() {
  const [date, setDate] = useState<Date | undefined>(addDays(new Date(), 1));
  const [timeSlot, setTimeSlot] = useState<string>("14:00"); // Default to 2:00 PM
  const [duration, setDuration] = useState<string>("30");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [topic, setTopic] = useState<string>("");
  const [agenda, setAgenda] = useState<string>("");
  const [activeTab, setActiveTab] = useState<string>("details");

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const [meetingDetails, setMeetingDetails] = useState<any>(null);
  const [copied, setCopied] = useState<boolean>(false);

  // Using optional chaining to safely access window
  const isMobile =
    typeof window !== "undefined" ? useMediaQuery("(max-width: 640px)") : false;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    if (!date || !timeSlot || !duration || !name || !email || !topic) {
      setError("Please fill all required fields");
      setIsSubmitting(false);
      return;
    }

    try {
      // Convert date and time to ISO format
      const [hours] = timeSlot.split(":").map(Number);
      const meetingDate = new Date(date);
      meetingDate.setHours(hours, 0, 0, 0);

      const startTime = meetingDate.toISOString();

      const response = await fetch("/api/zoom", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          topic,
          startTime,
          duration: parseInt(duration),
          agenda,
          name,
          email,
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to schedule meeting");
      }

      setMeetingDetails(data.meeting);
      setSuccess(true);
    } catch (err: any) {
      setError(err.message || "An error occurred while scheduling the meeting");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setTopic("");
    setAgenda("");
    setDate(addDays(new Date(), 1));
    setTimeSlot("14:00");
    setDuration("30");
    setActiveTab("details");
    setSuccess(false);
    setMeetingDetails(null);
    setError(null);
  };

  // Prepare the success dialog when needed
  const successDialog =
    success && meetingDetails ? (
      <Dialog open={success} onOpenChange={(open) => !open && resetForm()}>
        <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
          <DialogHeader className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
              className="w-16 h-16 mx-auto bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4"
            >
              <VideoIcon className="h-8 w-8" />
            </motion.div>
            <DialogTitle className="text-2xl">Meeting Scheduled!</DialogTitle>
            <DialogDescription>
              Your Zoom meeting has been successfully scheduled.{" "}
              {meetingDetails.emailsSent &&
                "Confirmation emails have been sent."}
            </DialogDescription>
          </DialogHeader>

          <div className="bg-secondary/30 rounded-lg p-4 my-4 border border-border">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-xs text-muted-foreground">TOPIC</Label>
                <p className="font-medium">{meetingDetails.topic}</p>
              </div>
              <div className="space-y-2">
                <Label className="text-xs text-muted-foreground">
                  DATE & TIME
                </Label>
                <p className="font-medium flex items-center">
                  <CalendarIcon className="mr-2 h-4 w-4 text-primary" />
                  {new Date(
                    meetingDetails.start_time
                  ).toLocaleDateString()} at{" "}
                  {new Date(meetingDetails.start_time).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>
              <div className="space-y-2">
                <Label className="text-xs text-muted-foreground">
                  DURATION
                </Label>
                <p className="font-medium flex items-center">
                  <Clock className="mr-2 h-4 w-4 text-primary" />
                  {meetingDetails.duration} minutes
                </p>
              </div>
              {meetingDetails.password && (
                <div className="space-y-2">
                  <Label className="text-xs text-muted-foreground">
                    PASSWORD
                  </Label>
                  <p className="font-medium">{meetingDetails.password}</p>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-3">
            <Label>Meeting Link</Label>
            <div className="flex items-center gap-2">
              <Input
                value={meetingDetails.join_url}
                readOnly
                className="font-mono text-xs"
              />
              <Button
                size="icon"
                variant="outline"
                onClick={() => {
                  navigator.clipboard.writeText(meetingDetails.join_url);
                  setCopied(true);
                  setTimeout(() => setCopied(false), 2000);
                }}
                className="shrink-0"
              >
                {copied ? (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Check className="h-4 w-4" />
                  </motion.div>
                ) : (
                  <Clipboard className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-border">
            <h4 className="font-medium mb-2">Add to Calendar</h4>
            <div className="flex flex-wrap gap-2">
              <a
                href={`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
                  meetingDetails.topic
                )}&dates=${encodeURIComponent(
                  meetingDetails.start_time
                    .replace(/[-:]/g, "")
                    .replace(".000Z", "Z")
                )}&details=${encodeURIComponent(
                  `Join URL: ${meetingDetails.join_url}\nPassword: ${
                    meetingDetails.password || "None"
                  }\n\nMeeting ID: ${meetingDetails.id}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1 rounded-md bg-primary/10 text-primary text-sm hover:bg-primary/20 transition-colors"
              >
                <CalendarIcon className="h-3.5 w-3.5" /> Google
              </a>
              <a
                href={`https://outlook.office.com/calendar/0/deeplink/compose?subject=${encodeURIComponent(
                  meetingDetails.topic
                )}&body=${encodeURIComponent(
                  `Join URL: ${meetingDetails.join_url}\nPassword: ${
                    meetingDetails.password || "None"
                  }\n\nMeeting ID: ${meetingDetails.id}`
                )}&startdt=${encodeURIComponent(
                  meetingDetails.start_time
                )}&enddt=${encodeURIComponent(
                  new Date(
                    new Date(meetingDetails.start_time).getTime() +
                      parseInt(meetingDetails.duration) * 60000
                  ).toISOString()
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1 rounded-md bg-primary/10 text-primary text-sm hover:bg-primary/20 transition-colors"
              >
                <CalendarIcon className="h-3.5 w-3.5" /> Outlook
              </a>
            </div>
          </div>

          <DialogFooter className="mt-6 flex flex-col sm:flex-row gap-2">
            <Button
              variant="outline"
              className="w-full sm:w-auto"
              onClick={resetForm}
            >
              Schedule Another Meeting
            </Button>
            <Button
              className="w-full sm:w-auto"
              onClick={() => {
                window.open(meetingDetails.join_url, "_blank");
              }}
            >
              Join Meeting
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    ) : null;

  return (
    <>
      {successDialog}
      <Card className="w-full max-w-xl mx-auto bg-card/60 backdrop-blur-sm shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-center">
            <VideoIcon className="h-6 w-6 text-primary mx-auto" />
            <span className="mx-auto">Schedule a Zoom Meeting</span>
          </CardTitle>
          <CardDescription className="text-center">
            Book a meeting to discuss your project requirements or any questions
            you may have.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {error && (
            <Alert variant="destructive" className="mb-4">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <Tabs
            defaultValue="details"
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="details">Your Details</TabsTrigger>
              <TabsTrigger value="schedule">Schedule</TabsTrigger>
            </TabsList>

            <form onSubmit={handleSubmit}>
              <TabsContent value="details" className="space-y-4 mt-0">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium">
                      Your Name *
                    </Label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="John Doe"
                      required
                      className="bg-background/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">
                      Your Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="john@example.com"
                      required
                      className="bg-background/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="topic" className="text-sm font-medium">
                      Meeting Topic *
                    </Label>
                    <Input
                      id="topic"
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                      placeholder="e.g., Project Discussion"
                      required
                      className="bg-background/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="agenda" className="text-sm font-medium">
                      Agenda (optional)
                    </Label>
                    <Textarea
                      id="agenda"
                      value={agenda}
                      onChange={(e) => setAgenda(e.target.value)}
                      placeholder="Brief description of what you'd like to discuss"
                      rows={3}
                      className="bg-background/50"
                    />
                  </div>

                  <div className="pt-4">
                    <Button
                      type="button"
                      className="w-full"
                      onClick={() => setActiveTab("schedule")}
                    >
                      Next: Choose Date & Time
                    </Button>
                  </div>
                </motion.div>
              </TabsContent>

              <TabsContent value="schedule" className="mt-0">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label className="text-sm font-medium">
                        Select Date *
                      </Label>
                      <div className="border rounded-md p-1 bg-background/50 overflow-visible">
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full justify-start text-left font-normal bg-background/50",
                                !date && "text-muted-foreground"
                              )}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {date ? (
                                format(date, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={date}
                              onSelect={(date: Date | undefined) => {
                                console.log("Date selected:", date);
                                setDate(date);
                              }}
                              initialFocus
                              disabled={(date: Date) =>
                                date < new Date() ||
                                date > addDays(new Date(), 60)
                              }
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label className="text-sm font-medium">
                          Select Time *
                        </Label>
                        <Select
                          value={timeSlot}
                          onValueChange={(value) => {
                            console.log("Time selected:", value);
                            setTimeSlot(value);
                          }}
                        >
                          <SelectTrigger className="bg-background/50">
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent className="max-h-[200px]">
                            <div className="grid grid-cols-2 gap-1">
                              {timeSlots.map((slot) => (
                                <SelectItem
                                  key={slot.value}
                                  value={slot.value}
                                  className="py-1.5"
                                >
                                  {slot.label}
                                </SelectItem>
                              ))}
                            </div>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label className="text-sm font-medium">
                          Duration *
                        </Label>
                        <Select
                          value={duration}
                          onValueChange={(value) => {
                            console.log("Duration selected:", value);
                            setDuration(value);
                          }}
                        >
                          <SelectTrigger className="bg-background/50">
                            <SelectValue placeholder="Select duration" />
                          </SelectTrigger>
                          <SelectContent>
                            {durations.map((d) => (
                              <SelectItem key={d.value} value={d.value}>
                                {d.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2 pt-4">
                    <Button
                      type="button"
                      variant="outline"
                      className="w-full"
                      onClick={() => setActiveTab("details")}
                    >
                      Back
                    </Button>
                    <Button
                      type="submit"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-1">
                          <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                          Scheduling...
                        </span>
                      ) : (
                        "Schedule Meeting"
                      )}
                    </Button>
                  </div>
                </motion.div>
              </TabsContent>
            </form>
          </Tabs>
        </CardContent>
      </Card>
    </>
  );
}
