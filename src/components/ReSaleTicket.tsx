import React, { useState } from 'react';
import { useWeb3React } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
import { Contract } from "@ethersproject/contracts";
import { parseEther }from "@ethersproject/units"
import {  Input , NumberInput,  NumberInputField,  FormControl,  FormLabel, Button } from '@chakra-ui/react'
import  Ticket  from "../artifacts/contracts/Ticket.sol/TicketSale.json"
interface Props {
    addressContract: string
}

const CreateReSaleTicket =  (props:Props) => {
  
    const addressContract = props.addressContract;
    const [ticketId, setTicketId] = useState<string| undefined>(undefined)
    const [price, setPrice] = useState<string| undefined>(undefined)
    const [timeStart, setTimeStart] = useState<string| undefined>(undefined)
    const [timeEnd, setTimeEnd] = useState<string| undefined>(undefined)
   
    const { account, active, library} = useWeb3React<Web3Provider>()
    async function creatEventSaleTicket(event:React.FormEvent) {
        event.preventDefault()
        if(!(active && account && library)) return
    
        // new contract instance with **signer**
        const ticket = new Contract(addressContract, Ticket.abi , library.getSigner());
        await ticket.reSaleTicket(ticketId,price,timeStart,timeEnd).catch('error', console.error)
      }
      const ticketid = (value:string) => setTicketId(value)
      const Price = (value:string) => setPrice(value)
      const timestart = (value:string) => setTimeStart(value)
      const timeend = (value:string) => setTimeEnd(value)
      
      return (
        <div>
            <form onSubmit={creatEventSaleTicket}>
              <FormControl>
                <FormLabel htmlFor='ticketid'>Nhập ID của vé </FormLabel>
                <NumberInput id="ticketid" onChange={Price}>
                <NumberInputField />
                </NumberInput>
                <FormLabel htmlFor='price'>Nhập Giá Vé </FormLabel>
                <NumberInput id="price" onChange={timestart}>
                <NumberInputField />
                </NumberInput>
                <FormLabel htmlFor='timestart'>Thời Gian Bắt Đầu Bán </FormLabel>
                <NumberInput id="timestart" onChange={timeend}>
                <NumberInputField />
                </NumberInput>
                <FormLabel htmlFor='timeend'>Thời Gian Kết Thúc Bán </FormLabel>
                <NumberInput id="timeend" onChange={ticketid}>
                <NumberInputField />
                </NumberInput>
                <Button type="submit" isDisabled={!account}>Transfer</Button>
              </FormControl>
            </form>
        </div>
      )
}
export default CreateReSaleTicket
