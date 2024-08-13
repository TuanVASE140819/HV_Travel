interface TourDetailPageProps {
  params: {
    id: string;
  };
}

const TourDetailPage = ({ params }: TourDetailPageProps) => {
  const { id } = params;

  return (
    <div>
      <h2>Chi tiết tour {id}</h2>
      <p>Thông tin về tour {id}...</p>
    </div>
  );
};

export default TourDetailPage;
