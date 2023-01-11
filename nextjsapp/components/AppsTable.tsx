import {
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
  Box,
  Container,
  Flex,
} from "@chakra-ui/react";
import clsx from "clsx";
import styles from "@styles/index.module.css";

export default function AppsTable() {
  return (
    <>
      <TableContainer borderRadius="lg">
        <Table variant="simple" size="sm">
          <Thead>
            <Tr>
              <Th>TITLE</Th>
              <Th>CONTRACT</Th>
              <Th>ADDRESS</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>R7SGd5uUedjOpix8Q4so:drumfeettitle</Td>
              <Td>contractTxId=SbHG02aswwo06O4FtpcqyW1w882hu27y9hG8_1ONQg4</Td>
              <Td>walletAddress=rk-IS2j0SF3sMAn49bsnOIHHpzOuEkYwYhuJgJbUEk8</Td>
            </Tr>
            <Tr>
              <Td>iSjRL6ZRq4lqxF1GuEDe:drumfeet2</Td>
              <Td>contractTxId=bZCZ_XLI0n_rwa_RjaEJ7fPK6pkQp_QDTSAV5t1Jh_k</Td>
              <Td>walletAddress=s2tPMfp2006Oc751mWKeerl8Ki_ZGYXGfm1cAtrDv7Q</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}
