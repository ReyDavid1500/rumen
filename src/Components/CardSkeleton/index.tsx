import { Card, Skeleton } from "@nextui-org/react";

function CardSkeleton() {
  const cardData = Array.from({ length: 6 });

  return (
    <div className="card">
      {cardData.map((_, index) => (
        <Card
          key={index}
          className="w-[267px] h-[340px] space-y-5 p-4 m-auto"
          radius="lg"
        >
          <Skeleton className="rounded-lg">
            <div className="h-44 rounded-lg bg-default-300"></div>
          </Skeleton>
          <div className="space-y-3">
            <Skeleton className="w-3/5 rounded-lg">
              <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="w-4/5 rounded-lg">
              <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="w-2/5 rounded-lg">
              <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
            </Skeleton>
          </div>
        </Card>
      ))}
    </div>
  );
}

export default CardSkeleton;
