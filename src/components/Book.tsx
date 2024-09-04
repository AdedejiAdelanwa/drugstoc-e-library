import React from "react";
import {
  Box,
  Button,
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { IBook } from "./Content";
import { truncateText } from "../utils";
import { Rating } from "react-simple-star-rating";

interface Props {
  book: IBook;
}

function Book({ book }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <VStack
        overflow="hidden"
        pos="relative"
        key={book.id}
        w={["140px", "200px"]}
        bg="whitesmoke"
        py="10px"
        px="5px"
        borderRadius="md"
        boxShadow="sm"
        _hover={{ boxShadow: "md" }}
        cursor="pointer"
        onClick={onOpen}
      >
        <Image
          src={book.volumeInfo.imageLinks?.smallThumbnail}
          fallbackSrc="https://via.placeholder.com/150"
          alt={book?.volumeInfo.title}
        />
        <Text fontSize={["14px", "16px"]} fontWeight="bold" textAlign="center">
          {book?.volumeInfo.title}
        </Text>
        <Text fontSize={["12px", "14px"]} textAlign="center">
          {book.volumeInfo.authors?.join(", ") || "Unknown"}
        </Text>
        <Text fontSize={["10px", "12px"]} color="grey">
          {book.volumeInfo.publishedDate}
        </Text>
      </VStack>
      <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <Flex direction={["column", "row"]} gap={3}>
                <Image
                  // boxSize="sm"
                  src={book.volumeInfo.imageLinks?.thumbnail}
                  fallbackSrc="https://via.placeholder.com/150"
                  alt={book?.volumeInfo.title}
                />

                <Box>
                  <Text fontSize={["18px", "24px"]} fontWeight="bold">
                    {`${book?.volumeInfo.title} ${
                      book?.volumeInfo.subtitle || ""
                    }`}
                  </Text>
                  <Text fontSize="14px">
                    by{" "}
                    <span style={{ color: "#1b72e8" }}>
                      {book.volumeInfo.authors?.join(", ") || "Unknown"}
                    </span>
                  </Text>
                  <Flex gap={2}>
                    <Rating
                      initialValue={book.volumeInfo.averageRating}
                      allowFraction={true}
                      emptyStyle={{ display: "flex" }}
                      emptyClassName="empty-stars"
                      fillClassName="filled-stars"
                      SVGstyle={{ borderRadius: "10px" }}
                      fillStyle={{ display: "-webkit-inline-box" }}
                      emptyColor="#729dc7"
                      size={20}
                      readonly
                    />
                    {book.volumeInfo.averageRating && (
                      <Text>
                        {book.volumeInfo.averageRating}(
                        {book.volumeInfo.ratingsCount})
                      </Text>
                    )}
                  </Flex>

                  <Text mt="20px" fontSize="14px">
                    {truncateText(book.volumeInfo?.description!, 40)}
                  </Text>
                  {book.volumeInfo.pageCount ? (
                    <Text mt="5px" fontSize={["10px", "12px"]} color="grey">
                      No. of pages: {book.volumeInfo.pageCount}
                    </Text>
                  ): ""}

                {book.volumeInfo.publisher && (  <Text
                    mt="10px"
                    textAlign="end"
                    fontSize={["10px", "12px"]}
                    color="grey"
                  >
                    Publisher: {book.volumeInfo.publisher}
                  </Text>)}
                </Box>
              </Flex>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button bg="#1b72e8" color="white" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Book;
