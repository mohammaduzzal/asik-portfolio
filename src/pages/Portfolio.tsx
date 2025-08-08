
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import YouTube from "@/components/testimony/YouTube"
import GoogleAds from "@/components/testimony/GoogleAds"
import MetaAds from "@/components/testimony/MetaAds"
import Thumbnail from "@/components/testimony/Thumbnail"

export default function Portfolio() {
  return (
    <Tabs defaultValue="tab-1" className="flex justify-center items-center mx-auto my-2">
      <ScrollArea>
        <TabsList className="grid grid-cols-2 md:grid-cols-4 bg-background mb-3 h-auto -space-x-px p-0 shadow-xs rtl:space-x-reverse">
          <TabsTrigger
            value="tab-1"
            className="data-[state=active]:bg-muted data-[state=active]:after:bg-primary relative overflow-hidden rounded-none border py-2 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 first:rounded-s last:rounded-e"
          >
            You Tube SEO
          </TabsTrigger>
          <TabsTrigger
            value="tab-2"
            className="data-[state=active]:bg-muted data-[state=active]:after:bg-primary relative overflow-hidden rounded-none border py-2 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 first:rounded-s last:rounded-e"
          >
            Google Ads
          </TabsTrigger>
          <TabsTrigger
            value="tab-3"
            className="data-[state=active]:bg-muted data-[state=active]:after:bg-primary relative overflow-hidden rounded-none border py-2 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 first:rounded-s last:rounded-e"
          >
            Meta Ads
          </TabsTrigger>
          <TabsTrigger
            value="tab-4"
            className="data-[state=active]:bg-muted data-[state=active]:after:bg-primary relative overflow-hidden rounded-none border py-2 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 first:rounded-s last:rounded-e"
          >
            Thumbnails
          </TabsTrigger>
        </TabsList>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <TabsContent value="tab-1">
        <YouTube/>
      </TabsContent>
      <TabsContent value="tab-2">
        <GoogleAds/>
      </TabsContent>
      <TabsContent value="tab-3">
        <MetaAds/>
      </TabsContent>
      <TabsContent value="tab-4">
        <Thumbnail/>
      </TabsContent>
    </Tabs>
  )
}
