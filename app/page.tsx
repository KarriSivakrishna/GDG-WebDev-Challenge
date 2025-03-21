import Link from "next/link"
import Image from "next/image"
import { Calendar, Users, Code, BookOpen, Mail, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/gdg-banner.png"
            alt="GDG Banner"
            fill
            className="object-cover opacity-20 dark:opacity-10"
            priority
          />
        </div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl gdg-gradient-text">
                Join the Global GDG Community
              </h1>
              <p className="mx-auto max-w-[700px] text-lg md:text-xl">
                Connect, Learn, and Build with Google Developer Groups. Join a global network of developers passionate
                about Google technologies.
              </p>
            </div>
            <div className="space-x-4">
              <Button asChild size="lg" className="bg-google-blue text-white hover:bg-google-blue/90">
                <Link href="/join">Join Now</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-google-green text-google-green hover:bg-google-green/10"
              >
                <Link href="/events">Upcoming Events</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 gdg-section">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-google-blue">Events</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Upcoming GDG Events</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join us for workshops, hackathons, and meetups. Connect with other developers and learn from experts.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <EventCard
              title="Web Development Workshop"
              date="March 25, 2025"
              time="6:00 PM - 8:00 PM"
              location="GDG Hub, Downtown"
              image="/placeholder.svg?height=400&width=600"
            />
            <EventCard
              title="Flutter Hackathon"
              date="April 10, 2025"
              time="9:00 AM - 5:00 PM"
              location="Tech Campus, Innovation Center"
              image="/placeholder.svg?height=400&width=600"
            />
            <EventCard
              title="Cloud Study Jam"
              date="April 18, 2025"
              time="2:00 PM - 4:00 PM"
              location="Virtual Event"
              image="/placeholder.svg?height=400&width=600"
            />
          </div>
          <div className="flex justify-center">
            <Button
              asChild
              variant="outline"
              className="gap-1 border-google-yellow text-google-yellow hover:bg-google-yellow/10"
            >
              <Link href="/events">
                View All Events
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 gdg-section blue-purple">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-google-blue">Speakers</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Speakers</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Learn from industry experts and Google Developer Experts (GDEs) who share their knowledge and
                experience.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <SpeakerCard
              name="Alex Johnson"
              expertise="Web Development"
              image="/placeholder.svg?height=300&width=300"
            />
            <SpeakerCard
              name="Maria Garcia"
              expertise="Flutter & Mobile"
              image="/placeholder.svg?height=300&width=300"
            />
            <SpeakerCard name="David Kim" expertise="Cloud & DevOps" image="/placeholder.svg?height=300&width=300" />
          </div>
          <div className="flex justify-center">
            <Button
              asChild
              variant="outline"
              className="gap-1 border-google-red text-google-red hover:bg-google-red/10"
            >
              <Link href="/speakers">
                View All Speakers
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 gdg-section yellow-red">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-google-blue">Projects</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Community Projects</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore open-source projects created by our GDG community members and contribute to ongoing initiatives.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2">
            <ProjectCard
              title="GDG Event Manager"
              description="An open-source platform for managing GDG events and attendees."
              tech="Next.js, Firebase"
              github="https://github.com/gdg/event-manager"
            />
            <ProjectCard
              title="Community Learning Hub"
              description="A collaborative learning platform for sharing resources and tutorials."
              tech="React, Node.js, MongoDB"
              github="https://github.com/gdg/learning-hub"
            />
          </div>
          <div className="flex justify-center">
            <Button
              asChild
              variant="outline"
              className="gap-1 border-google-green text-google-green hover:bg-google-green/10"
            >
              <Link href="/projects">
                View All Projects
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 gdg-section">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-google-blue">Resources</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Learning Resources</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Access tutorials, articles, and videos to enhance your skills in Google technologies.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-3xl py-12">
            <Tabs defaultValue="articles" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-muted/50">
                <TabsTrigger value="articles">Articles</TabsTrigger>
                <TabsTrigger value="videos">Videos</TabsTrigger>
                <TabsTrigger value="tutorials">Tutorials</TabsTrigger>
              </TabsList>
              <TabsContent value="articles" className="mt-6 space-y-4">
                <ResourceCard
                  title="Getting Started with Firebase"
                  description="Learn how to set up Firebase for your web applications."
                  link="#"
                  type="article"
                />
                <ResourceCard
                  title="Advanced Angular Techniques"
                  description="Explore advanced patterns and practices in Angular development."
                  link="#"
                  type="article"
                />
                <ResourceCard
                  title="Cloud Functions Deep Dive"
                  description="Understanding serverless architecture with Google Cloud Functions."
                  link="#"
                  type="article"
                />
              </TabsContent>
              <TabsContent value="videos" className="mt-6 space-y-4">
                <ResourceCard
                  title="Flutter UI Masterclass"
                  description="A comprehensive guide to building beautiful UIs with Flutter."
                  link="#"
                  type="video"
                />
                <ResourceCard
                  title="TensorFlow for Beginners"
                  description="Introduction to machine learning with TensorFlow."
                  link="#"
                  type="video"
                />
              </TabsContent>
              <TabsContent value="tutorials" className="mt-6 space-y-4">
                <ResourceCard
                  title="Building Your First PWA"
                  description="Step-by-step guide to creating Progressive Web Apps."
                  link="#"
                  type="tutorial"
                />
                <ResourceCard
                  title="Kotlin Coroutines Workshop"
                  description="Hands-on tutorial for asynchronous programming in Kotlin."
                  link="#"
                  type="tutorial"
                />
              </TabsContent>
            </Tabs>
          </div>
          <div className="flex justify-center">
            <Button
              asChild
              variant="outline"
              className="gap-1 border-google-blue text-google-blue hover:bg-google-blue/10"
            >
              <Link href="/resources">
                View All Resources
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-google-blue to-google-green text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Stay Updated</h2>
                <p className="max-w-[600px] text-white/90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Subscribe to our newsletter to receive updates on upcoming events, new resources, and community
                  projects.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <form className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="max-w-lg flex-1 bg-white/10 text-white placeholder:text-white/50 focus:ring-2 focus:ring-white"
                />
                <Button type="submit" className="bg-white text-google-blue hover:bg-white/90">
                  Subscribe
                </Button>
              </form>
              <p className="text-sm text-white/70">We respect your privacy. Unsubscribe at any time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 gdg-section blue-purple">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-google-blue">Contact Us</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Have questions or want to get involved? Reach out to our GDG chapter.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-google-blue" />
                <p>contact@gdgcommunity.com</p>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="h-5 w-5 text-google-green" />
                <p>Monthly Meetups: Last Saturday of every month</p>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="h-5 w-5 text-google-yellow" />
                <p>Join our Discord community for daily discussions</p>
              </div>
              <div className="flex space-x-4 pt-4">
                <Link href="#" className="text-gray-500 hover:text-google-blue">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-500 hover:text-google-blue">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-500 hover:text-google-blue">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-500 hover:text-google-blue">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Name
                  </label>
                  <Input id="name" placeholder="Enter your name" />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Enter your message"
                />
              </div>
              <Button className="w-full bg-google-blue hover:bg-google-blue/90">Send Message</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function EventCard({ title, date, time, location, image }) {
  return (
    <Card className="overflow-hidden gdg-card">
      <Image
        src={image || "/placeholder.svg"}
        alt={title}
        width={600}
        height={400}
        className="object-cover w-full h-48"
      />
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          {date} • {time}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-500">{location}</p>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full bg-google-blue hover:bg-google-blue/90">
          <Link href="#">Register Now</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

function SpeakerCard({ name, expertise, image }) {
  return (
    <div className="flex flex-col items-center space-y-3">
      <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-google-blue">
        <Image src={image || "/placeholder.svg"} alt={name} width={160} height={160} className="object-cover" />
      </div>
      <div className="text-center">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-sm text-gray-500">{expertise}</p>
      </div>
      <div className="flex space-x-3">
        <Link href="#" className="text-gray-500 hover:text-google-blue">
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
          </svg>
        </Link>
        <Link href="#" className="text-gray-500 hover:text-google-blue">
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fillRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
        <Link href="#" className="text-gray-500 hover:text-google-blue">
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fillRule="evenodd"
              d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>
    </div>
  )
}

function ProjectCard({ title, description, tech, github }) {
  return (
    <Card className="gdg-card">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{tech}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-500">{description}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button asChild variant="outline" className="border-google-yellow text-google-yellow hover:bg-google-yellow/10">
          <Link href="#">View Demo</Link>
        </Button>
        <Button asChild className="bg-google-green hover:bg-google-green/90">
          <Link href={github} target="_blank" rel="noopener noreferrer">
            <Code className="mr-2 h-4 w-4" />
            GitHub Repo
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

function ResourceCard({ title, description, link, type }) {
  return (
    <Card className="gdg-card">
      <CardHeader>
        <CardTitle className="flex items-center">
          {type === "article" && <BookOpen className="mr-2 h-5 w-5 text-google-blue" />}
          {type === "video" && (
            <svg className="mr-2 h-5 w-5 text-google-red" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          )}
          {type === "tutorial" && <Code className="mr-2 h-5 w-5 text-google-green" />}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-500">{description}</p>
      </CardContent>
      <CardFooter>
        <Button
          asChild
          variant="outline"
          className="w-full border-google-blue text-google-blue hover:bg-google-blue/10"
        >
          <Link href={link}>
            {type === "article" ? "Read Article" : type === "video" ? "Watch Video" : "View Tutorial"}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

