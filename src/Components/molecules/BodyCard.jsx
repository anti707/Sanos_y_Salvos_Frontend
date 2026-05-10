import Text from '../atoms/Text';

function BodyCard({ title, description}) {
  return (
    <>
      <Text variant="h5" className="project-card-title">{title}</Text>
      <Text variant="p" className="project-card-description">{description}</Text>
    </>
  );
}

export default BodyCard;