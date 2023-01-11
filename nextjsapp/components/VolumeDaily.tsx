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
  const [data, setData] = useState<any>({});

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "9ad36ac3-00f0-4f75-bc2c-b075e000e41a",
    },
  };

  const apiUrlStats = "https://api.nftport.xyz/v0/transactions/stats/";
  const chain = "?chain=polygon";
  const contract_addresses = [
    // "0x77BD275fF2B3Dc007475aAC9Ce7F408F5A800188",
    // "0x248ecb809cBe812EbdB09d75fA87E9CdF2F76030",
    // "0xb70b8191F47E82E5d22b0a6224E0F11eb2e276DF",
    // "0x51Ac4A13054D5d7e1FA795439821484177e7E828",
    "0xC7a096b4c6610ba3a836070333ff7922b9866a36",
    // "0x819e58E51d64AB05EfA132a133DE0aF5089954Cf",
  ];

  useEffect(() => {
    contract_addresses.forEach((contract_address) => {
      fetch(apiUrlStats + contract_address + chain, options)
        .then((response) => response.json())
        .then((response) => {
          if (!data.hasOwnProperty(contract_address)) {
            console.log("count");
            setData((prevData: any) => ({
              ...prevData,
              [contract_address]: response,
            }));
          }
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
              <Th>MARKET CAP</Th>
            </Tr>
          </Thead>
          <Tbody>
            {contract_addresses.map((address, index) => (
              <Tr key={address}>
                <Td>AppTitleTest</Td>
                <Td>{address}</Td>
                <Td>{data[address]?.statistics?.one_day_volume}</Td>
                <Td>{data[address]?.statistics?.seven_day_volume}</Td>
                <Td>{data[address]?.statistics?.thirty_day_volume}</Td>
                <Td>{data[address]?.statistics?.market_cap}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}
