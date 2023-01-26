import React, { useState } from 'react';
import { useWeb3React } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
import { Contract } from "@ethersproject/contracts";
import {  Input , NumberInput,  NumberInputField,  FormControl,  FormLabel, Button } from '@chakra-ui/react'
import  Ticket  from "../artifacts/contracts/Ticket.sol/TicketSale.json"
interface Props {
    addressContract: string
}

const CreateReBuyTicket =  (props:Props) => {
    const addressContract = props.addressContract;
    const [ticketId, setTicketId] = useState<string| undefined>(undefined)
    const [token, setToken] = useState<string| undefined>(undefined)
    const { account, active, library} = useWeb3React<Web3Provider>()
    async function createBuyTicket(event:React.FormEvent) {
        event.preventDefault()
        if(!(active && account && library)) return
    
        // new contract instance with **signer**
        // const ticket = new Contract(addressContract, ticketabi , library.getSigner());
        const ticket = new Contract(addressContract, Ticket.abi, library.getSigner());
        const createCompany = await ticket.buyReSaleTicket(ticketId).catch('error', console.error)
        await createCompany.wait() 
      }
      const ticketid = (value:string) => setTicketId(value)
      return (
        <div>
            <form onSubmit={createBuyTicket}>
              <FormControl>
                
                <FormLabel htmlFor='ticketid'>Nhập ID của vé </FormLabel>
                <NumberInput id="ticketid" onChange={ticketid}>
                <NumberInputField />
                </NumberInput>
                <FormLabel htmlFor='token'>Địa chỉ Token: </FormLabel>
                <Input id="token" type="text" required  onChange={(e) => setToken(e.target.value)} my={3}/>
                <Button type="submit" isDisabled={!account}>Transfer</Button>
              </FormControl>
            </form>
        </div>
      )
}
export default CreateReBuyTicket
