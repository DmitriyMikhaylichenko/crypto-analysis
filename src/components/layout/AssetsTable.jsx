import { Table } from "antd";
import { useCrypto } from "../../context/crypto-context";
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    showSorterTooltip: { target: "full-header" },

    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ["descend"],
  },
  {
    title: "Price, $",
    dataIndex: "price",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.price - b.price,
  },
  {
    title: "Amount",
    dataIndex: "amount",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.amount - b.amount,
  },
  {
    title: "Date",
    dataIndex: "date",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.date - b.date,
  },
];

export default function AssetsTable() {
  const { assets } = useCrypto();
  const data = assets.map((a) => ({
    name: a.name,
    id: a.id,
    price: a.price,
    amount: a.amount,
    date: a.date.toLocaleString(),
  }));

  return (
    <Table
      pagination={false}
      columns={columns}
      dataSource={data}
      showSorterTooltip={{ target: "sorter-icon" }}
    />
  );
}
