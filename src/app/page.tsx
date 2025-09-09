import Image from 'next/image';

export default function Page(_: PageProps<'/'>) {
  return (
    <div className="flex justify-center items-center w-full min-h-dvh">
      <Image
        src="/static/frontend-dev-icon.svg"
        width={80}
        height={80}
        alt="Front-End Development"
        draggable={false}
        priority
      />
    </div>
  );
}
