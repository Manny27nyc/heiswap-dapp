/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
// @flow
import React from 'react'
import {
  Flex,
  Box,
  Button,
  Modal,
  Card
} from 'rimble-ui'

type ModalProps = {
  isOpen: Boolean,
  setIsOpen: Function<Boolean>,
  children: any
}

const StatusModal = (props: ModalProps) => {
  const { isOpen, setIsOpen } = props

  return (
    <Modal isOpen={isOpen}>
      <Card style={{ maxWidth: '620px' }} p={0}>
        <Button.Text
          icononly
          icon={'Close'}
          color={'moon-gray'}
          position={'absolute'}
          top={0}
          right={0}
          mt={3}
          mr={3}
          onClick={() => setIsOpen(false)}
        />

        <Box p={4} mb={3}>
          { props.children }
        </Box>

        <Flex
          px={4}
          py={3}
          borderTop={1}
          borderColor={'#E8E8E8'}
          justifyContent={'flex-end'}
        >
          <Button.Outline onClick={() => setIsOpen(false)}>
            Close
          </Button.Outline>
        </Flex>
      </Card>
    </Modal>
  )
}

export default StatusModal
