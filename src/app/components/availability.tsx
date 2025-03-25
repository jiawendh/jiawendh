import { cn } from "@/lib/utils";

export default function Availability(props: { className?: string }) {
  return (
    <p
      className={cn("text-xs md:text-sm font-semibold inline-block self-start",
      "bg-gray-500/[.15] px-2.5 py-0.5 rounded hover:cursor-default",
      props.className)}
    >
      Available 5th May 2025 onwards!
    </p>
  );
}
