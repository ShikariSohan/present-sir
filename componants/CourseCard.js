import { Card, Image, Text } from "@mantine/core";

export default function CourseCard() {
  return (
    <>
      <Card
        shadow="xl"
        p="xl"
        component="a"
        href="/auth"
        target="_blank"
        style={{
          width: 300,
          margin: 20,
          minHeight: 320,
          maxHeight: 320,
        }}
      >
        <Card.Section>
          <Image
            src=" https://placekeanu.com/200/150"
            height={160}
            alt="No way!"
          />
        </Card.Section>

        <Text weight={800} size="lg" mt="md">
          Computer Graphics
        </Text>
        <Text weight={600} size="md" mt="md">
          CSE373
        </Text>
        <Text weight={400} size="sm" mt="md">
          2018/19
        </Text>
      </Card>
    </>
  );
}
