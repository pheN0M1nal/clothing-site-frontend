import React from "react";

const ReviewItem = () => {
  return (
    <>
      <div className="flex flex-col space-y-4">
        {/* User name */}

        <span className="text-base font-serif text-zinc-500">Talha</span>
        {/* Comment */}
        <span className="text-sm text-zinc-400">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
          cupiditate eligendi labore explicabo beatae, ea placeat cum. Eligendi
          suscipit, unde harum aut, dignissimos excepturi dolorem incidunt,
          molestiae aspernatur modi eum.
        </span>
      </div>
    </>
  );
};

export default ReviewItem;
