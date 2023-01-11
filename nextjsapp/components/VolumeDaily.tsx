import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";

export default function VolumeDaily() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "9ad36ac3-00f0-4f75-bc2c-b075e000e41a",
    },
  };
  interface ResponseData {
    [key: string]: {
      statistics: any;
      one_day_volume: number;
      seven_day_volume: number;
      thirty_day_volume: number;
    };
  }

  const [data, setData] = useState<ResponseData>({});

  const apiUrl = "https://api.nftport.xyz/v0/transactions/stats/";
  const contract_addresses = [
    "0x51Ac4A13054D5d7e1FA795439821484177e7E828",
    "0xC7a096b4c6610ba3a836070333ff7922b9866a36",
  ];
  const chain = "?chain=polygon";

  useEffect(() => {
    contract_addresses.forEach((contract_address) => {
      fetch(apiUrl + contract_address + chain, options)
        .then((response) => response.json())
        .then((response) => {
          //store response with 'contract_address' as key
          setData((prevData) => ({
            ...prevData,
            [contract_address]: response,
          }));
        })
        .catch((err) => console.error(err));
    });
  }, []);

  console.log("drumfeet", data);

  return (
    <>
      <TableContainer borderRadius="lg">
        <Table variant="simple" size="sm">
          <Thead>
            <Tr>
              <Th>TITLE</Th>
              <Th>CONTRACT</Th>
              <Th>1 DAY VOLUME</Th>
              <Th>7 DAY VOLUME</Th>
              <Th>30 DAY VOLUME</Th>
            </Tr>
          </Thead>
          <Tbody>
            {contract_addresses.map((address, index) => (
              <Tr key={address}>
                <Td>test</Td>
                <Td>{address}</Td>
                <Td>{data[address]?.statistics?.one_day_volume}</Td>
                <Td>{data[address]?.statistics?.seven_day_volume}</Td>
                <Td>{data[address]?.statistics?.thirty_day_volume}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}
