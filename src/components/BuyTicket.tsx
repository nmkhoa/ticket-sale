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

const CreateBuyTicket =  (props:Props) => {
    const addressContract = props.addressContract;
    const [eventId, setEventId] = useState<string| undefined>(undefined)
    const [valueSeat, setValueSeat] = useState('')
    const [activitySeat, setSeat] = useState([])

    const [valueAmount, setValueAmount] = useState('')
    const [activityAmount, setAmount] = useState([])
    const [addressToken,setAddressToken] = useState<string | undefined>(undefined)
    const { account, active, library} = useWeb3React<Web3Provider>()
    async function createBuyTicket(event:React.FormEvent) {
        event.preventDefault()
        if(!(active && account && library)) return
    
        // new contract instance with **signer**
        // const ticket = new Contract(addressContract, ticketabi , library.getSigner());
        const ticket = new Contract(addressContract, Ticket.abi, library.getSigner());
        const buyticket = await ticket.buyTicket(eventId,activityAmount,activitySeat,addressToken).catch('error', console.error)
        await buyticket.wait() 
      }
      const eventid = (value:string) => setEventId(value) 
      const amount = (value:string) => setValueAmount(value)
      const handleSetSeat = e => {
        let names = activitySeat.concat(valueSeat);
        setSeat(names);
        };
      const handleSetAmount = e => {
          let names = activityAmount.concat(valueAmount);
          setAmount(names);
        };
      return (
        <div>
            <form onSubmit={createBuyTicket}>
              <FormControl>
                <FormLabel htmlFor='eventid'>Nhập id event của sự kiện: </FormLabel>
                <NumberInput id="eventid" onChange={eventid}>
                <NumberInputField />
                </NumberInput>
                <FormLabel htmlFor='token'>Địa chỉ Token: </FormLabel>
                <Input id="token" type="text" required  onChange={(e) => setAddressToken(e.target.value)} my={3}/>
                <FormLabel htmlFor='seat'>Chỗ Ngồi: </FormLabel>
                <Input id="seat" type="text" required  value={valueSeat} onChange={e => setValueSeat(e.target.value)} my={3} />
                <Button onClick={handleSetSeat}>
                  thêm
                </Button>
                {JSON.stringify(activitySeat)}
                <FormLabel htmlFor='amount'>Số lượng vé theo chỗ ngồi: </FormLabel>
                <NumberInput id="amount" value={valueAmount} onChange={amount}>
                <NumberInputField />
                </NumberInput>
                <Button onClick={handleSetAmount}>
                  thêm
                </Button>
                {JSON.stringify(activityAmount)}
                <Button type="submit" isDisabled={!account}>Transfer</Button>
              </FormControl>
            </form>
        </div>
      )
}
export default CreateBuyTicket
