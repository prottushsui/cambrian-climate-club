"use client";

import { Announcement } from "@/components/ui/announcement";
import { ArrowUpRightIcon } from "@radix-ui/react-icons";
import { Badge } from "@/components/ui/badge"; // Assuming you have a Badge component or will use shadcn's

export function AnnouncementDemo() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 p-8 bg-gray-100 dark:bg-gray-900">
      {/* Default Announcement */}
      <Announcement>
        <Badge variant="secondary">New</Badge>
        <Announcement.Title>We just launched something awesome!</Announcement.Title>
        <Announcement.Link href="#">
          Read the blog post{" "}
          <ArrowUpRightIcon className="ml-1 inline size-3 align-middle" />
        </Announcement.Link>
      </Announcement>

      {/* Themed Announcement */}
      <Announcement variant="default" themed>
        <Badge variant="secondary">New</Badge>
        <Announcement.Title>We just launched something awesome!</Announcement.Title>
        <Announcement.Link href="#">
          Read the blog post{" "}
          <ArrowUpRightIcon className="ml-1 inline size-3 align-middle" />
        </Announcement.Link>
      </Announcement>
    </div>
  );
}
