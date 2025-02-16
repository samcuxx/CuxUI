import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import {
  User,
  Calendar,
  MapPin,
  Heart,
  Share2,
  MessageCircle,
  MoreVertical,
  Image as ImageIcon,
} from "lucide-react";

export default function CardsPage() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-3xl font-bold text-[#101010] dark:text-[#94A9C9] mb-4">
          Cards
        </h1>
        <p className="text-gray-500 dark:text-[#66768f] mb-8">
          Versatile card components for displaying content in a clean and
          organized way.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-semibold text-[#101010] dark:text-[#94A9C9] mb-4">
          Card Variants
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Default Card</CardTitle>
              <CardDescription>
                A simple card with header and content
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500 dark:text-[#66768f]">
                This is the default card style with a clean and minimal design.
              </p>
            </CardContent>
          </Card>

          <Card variant="ghost">
            <CardHeader>
              <CardTitle>Ghost Card</CardTitle>
              <CardDescription>
                A card with transparent background
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500 dark:text-[#66768f]">
                This card variant has a transparent background and subtle hover
                effect.
              </p>
            </CardContent>
          </Card>

          <Card variant="outline">
            <CardHeader>
              <CardTitle>Outline Card</CardTitle>
              <CardDescription>A card with colored border</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500 dark:text-[#66768f]">
                This card variant features a colored border for emphasis.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#101010] dark:text-[#94A9C9] mb-4">
          Use Cases
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Profile Card */}
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-[#ffe400] bg-opacity-10 flex items-center justify-center">
                  <User className="w-6 h-6 text-[#ffe400]" />
                </div>
                <div>
                  <CardTitle>John Doe</CardTitle>
                  <CardDescription>Software Engineer</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-[#66768f]">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>Joined 2024</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>San Francisco</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm" className="mr-2">
                Follow
              </Button>
              <Button size="sm">Message</Button>
            </CardFooter>
          </Card>

          {/* Social Card */}
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-[#ffe400] bg-opacity-10 flex items-center justify-center">
                    <User className="w-5 h-5 text-[#ffe400]" />
                  </div>
                  <div>
                    <CardTitle className="text-base">Jane Smith</CardTitle>
                    <CardDescription className="text-xs">
                      2 hours ago
                    </CardDescription>
                  </div>
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MoreVertical className="w-4 h-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500 dark:text-[#66768f] mb-4">
                Just launched my new portfolio website! Check it out and let me
                know what you think 🚀
              </p>
              <div className="relative h-48 rounded-lg bg-gray-100 dark:bg-[#1a2333] flex items-center justify-center">
                <ImageIcon className="w-8 h-8 text-gray-400 dark:text-[#66768f]" />
              </div>
            </CardContent>
            <CardFooter className="justify-between">
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="h-8 px-2">
                  <Heart className="w-4 h-4 mr-2" />
                  <span>24</span>
                </Button>
                <Button variant="ghost" size="sm" className="h-8 px-2">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  <span>12</span>
                </Button>
              </div>
              <Button variant="ghost" size="sm" className="h-8 px-2">
                <Share2 className="w-4 h-4 mr-2" />
                <span>Share</span>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    </div>
  );
}
