import { Table, Group,ActionIcon } from "@mantine/core";
import { IconPencil, IconTrash } from "@tabler/icons";

const mockData = [
  {
    name: "John Doe",
    registrationNo: "2018-19-001",
    totalAttendance: 20,
    totalAbsent: 2,
    addedOn: "2021-05-01",
  },
  {
    name: "John Doe",
    registrationNo: "2018-19-001",
    totalAttendance: 20,
    totalAbsent: 2,
    addedOn: "2021-05-01",
  },
  {
    name: "Muhit Mahmud al farhan bin al Rahman",
    registrationNo: "2018-19-001",
    totalAttendance: 20,
    totalAbsent: 2,
    addedOn: "2021-05-01",
  },
  {
    name: "John Doe",
    registrationNo: "2018-19-001",
    totalAttendance: 20,
    totalAbsent: 2,
    addedOn: "2021-05-01",
  },
  {
    name: "John Doe",
    registrationNo: "2018-19-001",
    totalAttendance: 20,
    totalAbsent: 2,
    addedOn: "2021-05-01",
  },
  {
    name: "John Doe",
    registrationNo: "2018-19-001",
    totalAttendance: 20,
    totalAbsent: 2,
    addedOn: "2021-05-01",
  },
  {
    name: "John Doe",
    registrationNo: "2018-19-001",
    totalAttendance: 20,
    totalAbsent: 2,
    addedOn: "2021-05-01",
  },
];

export default function StudentTable() {
  const ths = (
    <tr>
      <th>Name</th>
      <th>Registration No</th>
      <th>Total Attendance</th>
      <th>Total Absent</th>
      <th>Added on</th>
      <th>Action</th>
    </tr>
  );

  const rows = mockData.map((element) => (
    <tr key={element.registrationNo}>
      <td>{element.name}</td>
      <td>{element.registrationNo}</td>
      <td>{element.totalAttendance}</td>
      <td>{element.totalAbsent}</td>
      <td>{element.addedOn}</td>
      <td>
        <Group spacing={0} position="right">
          <ActionIcon>
            <IconPencil size={16} stroke={1.5} />
          </ActionIcon>
          <ActionIcon color="red">
            <IconTrash size={16} stroke={1.5} />
          </ActionIcon>
        </Group>
      </td>
    </tr>
  ));
  return (
    <Table
      striped
      highlightOnHover
      withBorder
      withColumnBorders
      captionSide="top"
      horizontalSpacing="xs"
      verticalSpacing="xs"
      fontSize="xs"
    >
      <caption>Student List</caption>
      <thead>{ths}</thead>
      <tbody>{rows}</tbody>
      <tfoot>{ths}</tfoot>
    </Table>
  );
}
// mock data for table name , registratin no , total attendance , total absent , added on
