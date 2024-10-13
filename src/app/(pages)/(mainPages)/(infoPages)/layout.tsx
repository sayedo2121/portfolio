import ContentPanel from "@/app/components/ContentPanel";

export default function InfoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full">
      <ContentPanel children={children}/>
    </div>
  );
}
