import leaves from "./leaves.png";

export default function LeavesDecoration() {
  return (
    <div className="relative w-full overflow-hidden">
      <img
        src={leaves}
        alt="decorative leaves"
        className="
          w-[600px]
          max-w-none
          absolute
          left-0
          bottom-0
          opacity-90
          pointer-events-none
          select-none

          sm:w-[500px]
          md:w-[650px]
          lg:w-[750px]
        "
      />
    </div>
  );
}
