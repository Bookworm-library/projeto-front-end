import { Button, useDisclosure } from "@chakra-ui/react";

interface iModalButtonProps {
  buttonTitle: string;
  buttonAction: any;
  style?: string;
}

export const ModalButton = ({
  buttonTitle,
  buttonAction,
  style,
}: iModalButtonProps) => {
  const { onClose } = useDisclosure();

  let bg = "white";
  let color = "black";

  if (style === "remove") {
    bg = "red";
    color = "white";
  }

  function handleOnClick() {
    buttonAction();
    if (style == "remove") {
      onClose();
    }
  }

  return (
    <Button
      borderStyle="4px"
      w="100%"
      bg={bg}
      color={color}
      _hover={{ opacity: "0.7" }}
      onClick={handleOnClick}
    >
      {buttonTitle}
    </Button>
  );
};
