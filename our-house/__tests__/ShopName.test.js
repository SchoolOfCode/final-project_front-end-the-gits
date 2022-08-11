import ShopName from "../pages/ShopName";
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { FaExpeditedssl } from "react-icons/fa";
import ShopNameItem from "../components/ShopNameItem";
import { UserProvider } from "@auth0/nextjs-auth0";
import InputBar from "../components/InputBar";

const mockUpdatelistOfShops = jest.fn()

describe("checking input Bar", () => {
    test('should have items in the list', () => { 
        render(
        <UserProvider>
             <InputBar 
                title="Create and Save your lists by shop name"
                name= ""
                handleclick={mockUpdatelistOfShops} 
            />
        </UserProvider> )
        const inputBar = screen.getByPlaceholderText(null)


        expect(inputBar).toBeInTheDocument()
     })
})
