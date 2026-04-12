import { InfiniteSlider } from "../motion-primitives/infinite-slider";
import ScrollHighlightTitle from "../ui/ScrollHighlightTitle";

export function TechStackSection({ techStack }: any) {
  return (
    <section className="py-20 px-6 ">
    
 <div className="mb-10 text-center">
                  <ScrollHighlightTitle text={techStack?.title} />
                </div>
      <div className="flex flex-wrap justify-center gap-4">
        <InfiniteSlider speedOnHover={20} gap={24}>
        {techStack.stack.map((item: any, i: number) => (
           <span
              key={i}
              className="px-5 py-2 border flex justify-center items-center rounded-full bg-white text-sm"
            >
              {item.name}
            </span>
        ))}
        </InfiniteSlider>
      </div>
    </section>
  )
}