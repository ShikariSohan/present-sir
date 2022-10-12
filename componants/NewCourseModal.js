import { Modal, TextInput ,Button} from "@mantine/core";

export default function NewCourseModal({ opened, setOpened }) {
  return (
    <Modal
      title="Add New Course"
      opened={opened}
      onClose={() => setOpened(false)}
      size="xs"
      centered
    >
      <div style={{ padding: 20 }}>
        <TextInput placeholder="ex : Computer Graphics" label="Course Title" />
        <TextInput placeholder="ex : CSE373" label="Course Code" />
        <TextInput placeholder="ex : 2018-19" label="Session" />
        <Button size="xs" sx={{marginTop:10}}  variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>Add Course</Button>
      </div>
    </Modal>
  );
}
