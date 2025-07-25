import Image from "next/image";

const logos = [1, 2, 3, 4, 5];

const Logos07Block = () => {
  return (
    <div className="min-h-[200px] flex items-center justify-center px-6">
      <div className="overflow-hidden w-full">
        <p className="text-center text-3xl font-bold">
          Ils nous font confiance
        </p>
        <div className="mt-20 max-w-screen-lg mx-auto">
          <div className="marquee">
            <div className="marquee-content flex min-w-max gap-10 grayscale opacity-70">
              {[...logos, ...logos].map((num, idx) => (
                <div key={`logo${num}-${idx}`} className="h-12 w-32 inline-block">
                  <Image src={`/logo${num}.png`} alt={`Logo client ${num}`} width={128} height={48} className="h-full w-full object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logos07Block;
