import { AlertBadge } from "@/components/ui/alert-badge"
import { RiNotificationFill, RiWifiLine } from '@remixicon/react' // Ensure remixicon is installed

export function AlertBadgeDemo() {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-6 bg-gray-100 dark:bg-gray-800">
      <AlertBadge
        variant="error"
        label="Major incident"
        action={{
          label: "Updates",
          href: "#",
        }}
      />
      <AlertBadge
        variant="success"
        icon={RiWifiLine}
        label="Connected"
        action={{
          label: "Edit",
          href: "#",
        }}
      />
      <AlertBadge
        variant="info"
        icon={RiNotificationFill}
        label="1 Notification"
        action={{
          label: "Read",
          href: "#",
        }}
      />
    </div>
  )
}
