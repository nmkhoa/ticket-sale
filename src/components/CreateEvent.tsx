import React, { useState } from 'react';
import { useWeb3React } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
import { Contract } from "@ethersproject/contracts";
import { parseEther }from "@ethersproject/units"
import {  Input , NumberInput,  NumberInputField,  FormControl,  FormLabel, Button } from '@chakra-ui/react'
import  Ticket  from "../config/ticket.json"
interface Props {
    addressContract: string
}

const CreateEvent =  (props:Props) => {
  
    const addressContract = props.addressContract;
    const [venue, setVenue] = useState<string| undefined>(undefined)
    const [name, setName] = useState<string | undefined>(undefined)
    const [discribeDetail, setDiscribeDetail] = useState<string | undefined>(undefined)
    const [saleStartTime, setSaleStartTime] = useState<string | undefined>(undefined)
    const [saleEndTime, setSaleEndTime] = useState<string | undefined>(undefined)
    
    const [valueSeat, setValueSeat] = useState('')
    const [activitySeat, setSeat] = useState([]);

    const [valueAmount, setValueAmount] = useState('')
    const [activityAmount, setAmount] = useState([])

    const [valuePrice,setValuePrice] = useState('')
    const [activityPrice, setPrice] = useState([])
    const [buyMax, setBuyMax] = useState<string | undefined>(undefined)
    const [addressToken,setAddressToken] = useState<string | undefined>(undefined)
    const { account, active, library} = useWeb3React<Web3Provider>()
    async function creatEventSaleTicket(event:React.FormEvent) {
        event.preventDefault()
        if(!(active && account && library)) return
    
        // new contract instance with **signer**
        const ticket = new Contract(addressContract, Ticket.abi , library.getSigner());
        await ticket.creatEventSaleTicket(venue,name,discribeDetail,activitySeat,getTimestamp(saleStartTime),getTimestamp(saleEndTime),activityAmount,activityPrice,buyMax,addressToken).catch('error', console.error)
      }
      
      function getTimestamp(date:any)
      {
        var tp = Math.round(Date.parse(date) / 1000);
        return tp;
      }

      const price = (value:string) => setValuePrice(value)
      const amount = (value:string) => setValueAmount(value)
      const buymax = (value:string) => setBuyMax(value)
      const handleSetSeat = e => {
      let names = activitySeat.concat(valueSeat);
      setSeat(names);
      };
      const handleSetPrice = e => {
      let names = activityPrice.concat(valuePrice);
      setPrice(names);
      };
      const handleSetAmount = e => {
        let names = activityAmount.concat(valueAmount);
        setAmount(names);
        };
      return (
        <div>
            <form onSubmit={creatEventSaleTicket}>
              <FormControl>
                <FormLabel htmlFor='venue'>Địa Điểm Tổ Chức: </FormLabel>
                <Input id="venue" type="text" required  onChange={(e) => setVenue(e.target.value)} my={3}/>
                <FormLabel htmlFor='name'>Tên Sự Kiện: </FormLabel>
                <Input id="name" type="text" required  onChange={(e) => setName(e.target.value)} my={3}/>
                <FormLabel htmlFor='discribe'>Mô Tả Chi Tiết: </FormLabel>
                <Input id="discribe" type="text" required  onChange={(e) => setDiscribeDetail(e.target.value)} my={3}/>
                {/* <FormLabel htmlFor='timestart'>Thời Gian Bắt Đầu Bán: </FormLabel>
                <NumberInput id="timestart" onChange={timeStart}>
                <NumberInputField />
                </NumberInput> */}
                <FormLabel htmlFor="party">Nhập ngày giờ bắt đầu bán</FormLabel>
                <Input id="time1" type="datetime-local" name="partydate1" onChange={(e) => setSaleStartTime(e.target.value)} my={3} />
                
                <FormLabel htmlFor="party">Nhập ngày giờ kết thúc bán</FormLabel>
                <Input id="time2" type="datetime-local" name="partydate2" onChange={(e) => setSaleEndTime(e.target.value)} my={3}/>
                <FormLabel htmlFor='buymax'>số lượng vé tối đa có thể mua: </FormLabel>
                <NumberInput id="buymax" onChange={buymax} my={3}>
                <NumberInputField />
                </NumberInput>
                <FormLabel htmlFor='token'>Địa chỉ Token: </FormLabel>
                <Input id="token" type="text" required  onChange={(e) => setAddressToken(e.target.value)} my={3}/>
                <FormLabel htmlFor='business'>Chỗ Ngồi: </FormLabel>
                <Input id="business" type="text" required  value={valueSeat} onChange={e => setValueSeat(e.target.value)} my={3} />
                <Button onClick={handleSetSeat} my={3}>
                  thêm
                </Button>
                {/* {JSON.stringify(activitySeat)} */}
                <FormLabel htmlFor='price'>Giá vé theo chỗ ngồi: </FormLabel>
                <NumberInput id="price" value={valuePrice} onChange={price} my={3}>
                <NumberInputField />
                </NumberInput>
                <Button onClick={handleSetPrice} my={3} >
                  thêm
                </Button>
                {/* {JSON.stringify(activityPrice)} */}
                <FormLabel htmlFor='amount'>Số lượng vé theo chỗ ngồi: </FormLabel>
                <NumberInput id="amount" value={valueAmount} onChange={amount} my={3}>
                <NumberInputField />
                </NumberInput>
                <Button onClick={handleSetAmount} my={3} >
                  thêm
                </Button>
                {/* {JSON.stringify(activityAmount)} */}
                <div> <Button type="submit" isDisabled={!account} my={3}>Transfer</Button> </div>
              </FormControl>
            </form>
        </div>
      )
}
export default CreateEvent
