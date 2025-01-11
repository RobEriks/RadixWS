import React from "react";
import { Table } from "@radix-ui/themes";

const TableComponent = () => {
  return (
    <div className="bg-[#1c1c22] text-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-2">Recent Sales</h2>
      <p className="text-gray-300 mb-4">You made 265 sales this month.</p>

      <Table.Root>
        <Table.Body>
          <Table.Row className="hover:bg-gray-700">
            <Table.RowHeaderCell className="flex items-center gap-4">
              <img
                src="../src/assets/01.png"
                alt="Avatar"
                className="rounded-full w-8 h-8"
              />
              <div>
                <p className="text-white font-medium">Olivia Martin</p>
                <p className="text-gray-400 text-sm">olivia.martin@email.com</p>
              </div>
            </Table.RowHeaderCell>
            <Table.Cell className="text-white font-bold text-right">
              +$1,999.00
            </Table.Cell>
          </Table.Row>

          <Table.Row className="hover:bg-gray-700">
            <Table.RowHeaderCell className="flex items-center gap-4">
              <img
                src="../src/assets/02.png"
                alt="Avatar"
                className="rounded-full w-8 h-8"
              />
              <div>
                <p className="text-white font-medium">Jackson Lee</p>
                <p className="text-gray-400 text-sm">jackson.lee@email.com</p>
              </div>
            </Table.RowHeaderCell>
            <Table.Cell className="text-white font-bold text-right">
              +$39.00
            </Table.Cell>
          </Table.Row>

          <Table.Row className="hover:bg-gray-700">
            <Table.RowHeaderCell className="flex items-center gap-4">
              <img
                src="../src/assets/03.png"
                alt="Avatar"
                className="rounded-full w-8 h-8"
              />
              <div>
                <p className="text-white font-medium">Isabella Nguyen</p>
                <p className="text-gray-400 text-sm">
                  isabella.nguyen@email.com
                </p>
              </div>
            </Table.RowHeaderCell>
            <Table.Cell className="text-white font-bold text-right">
              +$299.00
            </Table.Cell>
          </Table.Row>

          <Table.Row className="hover:bg-gray-700">
            <Table.RowHeaderCell className="flex items-center gap-4">
              <img
                src="../src/assets/04.png"
                alt="Avatar"
                className="rounded-full w-8 h-8"
              />
              <div>
                <p className="text-white font-medium">William Kim</p>
                <p className="text-gray-400 text-sm">will@email.com</p>
              </div>
            </Table.RowHeaderCell>
            <Table.Cell className="text-white font-bold text-right">
              +$99.00
            </Table.Cell>
          </Table.Row>

          <Table.Row className="hover:bg-gray-700">
            <Table.RowHeaderCell className="flex items-center gap-4">
              <img
                src="../src/assets/05.png"
                alt="Avatar"
                className="rounded-full w-8 h-8"
              />
              <div>
                <p className="text-white font-medium">Sofia Davis</p>
                <p className="text-gray-400 text-sm">sofia.davis@email.com</p>
              </div>
            </Table.RowHeaderCell>
            <Table.Cell className="text-white font-bold text-right">
              +$39.00
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
    </div>
  );
};

export default TableComponent;
