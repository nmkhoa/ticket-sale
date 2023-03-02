import React, { useState } from 'react';
import { useWeb3React } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
//import { Contract } from "@ethersproject/contracts";
import { ethers } from 'ethers'
import { parseEther }from "@ethersproject/units"
import { Button, Input , NumberInput,  NumberInputField,  FormControl,  FormLabel } from '@chakra-ui/react'
import   Ticket  from "../config/ticket.json"
interface Props {
    addressContract: string
}

const CreateCompany =  (props:Props) => {
    const addressContract = props.addressContract;
    const [addressCompany, setAddressCompany] = useState<string| undefined>(undefined)
    const [name, setName] = useState<string | undefined>(undefined)
    const [address, setAddress] = useState<string | undefined>(undefined)
    const [phone, setPhone] = useState<string | undefined>(undefined)
    const [business, setBusiness] = useState<string | undefined>(undefined)

    const { account, active, library} = useWeb3React<Web3Provider>()
    async function createInfoCompany(event:React.FormEvent) {
        event.preventDefault()
        if(!(active && account && library)) return
    
        // new contract instance with **signer**
        // const ticket = new Contract(addressContract, ticketabi , library.getSigner());
        const ticket = new ethers.Contract(addressContract, Ticket.abi, library.getSigner());
        const createCompany = await ticket.createInfoCompany(addressCompany,name,address,phone,business).catch('error', console.error)
        await createCompany.wait()
      }
      return (
        <div>
            <form onSubmit={createInfoCompany}>
              <FormControl>
                <FormLabel htmlFor='addressCompany'>Địa Chỉ Metamask Của Công Ty: </FormLabel>
                <Input id="addressCompany" type="text" required  onChange={(e) => setAddressCompany(e.target.value)} my={3}/>
                <FormLabel htmlFor='name'>Tên Của Công Ty: </FormLabel>
                <Input id="name" type="text" required  onChange={(e) => setName(e.target.value)} my={3}/>
                <FormLabel htmlFor='address'>Địa Chỉ: </FormLabel>
                <Input id="address" type="text" required  onChange={(e) => setAddress(e.target.value)} my={3}/>
                <FormLabel htmlFor='phone'>Hostline: </FormLabel>
                <Input id="phone" type="text" required  onChange={(e) => setPhone(e.target.value)} my={3}/>
                <FormLabel htmlFor='business'>Số ĐKKD: </FormLabel>
                <Input id="business" type="text" required  onChange={(e) => setBusiness(e.target.value)} my={3}/>
                <Button type="submit" isDisabled={!account}>Transfer</Button>
              </FormControl>
            </form>
        </div>
      )
}
export default CreateCompany
