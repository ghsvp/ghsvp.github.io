import { Icon } from "@iconify/react";
import constructionIcon from "@iconify/icons-mdi/construction";

export default function Resources() {
  return (
    <main className="mt-16 md:mt-24 lg:mt-24 p-8 max-w-2xl mx-auto text-center">
      <div className="p-8 flex flex-col items-center justify-center h-[61vh]">
        <Icon
          icon={constructionIcon}
          className="text-primary-1-500 mb-4"
          width="64"
          height="64"
        />
        <h1 className="text-3xl font-bold text-primary-1-500">
          Under Construction
        </h1>
        <p className="lg:text-lg text-gray-700">
          We are working hard to bring you this section soon. Stay tuned!
        </p>
      </div>
    </main>
  );
}
