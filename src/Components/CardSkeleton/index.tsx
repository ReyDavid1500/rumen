import { Card, Skeleton } from "@nextui-org/react";

function CardSkeleton() {
  const categoryData = Array.from({ length: 3 });
  const cardData = Array.from({ length: 6 });

  return categoryData.map((_, index) => (
    <div key={index}>
      <Skeleton className="w-96 rounded-lg m-auto mt-10">
        <div className="h-11 w-4 rounded-lg bg-default-200"></div>
      </Skeleton>
      <div className="card">
        {cardData.map((_, index) => (
          <Card
            key={index}
            className="w-[267px] h-[340px] space-y-5 p-4 m-auto mt-14"
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
    </div>
  ));
}

export default CardSkeleton;
