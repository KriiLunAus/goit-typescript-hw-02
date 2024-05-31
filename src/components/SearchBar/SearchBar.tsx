import toast, {Toaster} from "react-hot-toast";
import { FiSearch } from "react-icons/fi";
import css from "./SearchBar.module.css"



const SearchBar = ({ onSubmit }: SearchBarProps) => {
  

    const notify = () => toast.error("Please type something!!!");

    const handleSubmit = (evt: React.FormEvent<HTMLFormElement>): void => {

        evt.preventDefault();
        
        const form = evt.target as HTMLFormElement;
        const inputValue = (form.elements.namedItem('search') as HTMLInputElement).value.trim();

        if (inputValue !== "") {
            onSubmit({
                input: inputValue,
            })
            
        } else {
            notify();
        }

        form.reset();


    }
    return (
        <>
            <form className={css.form} onSubmit={handleSubmit}>
               <button type="submit">
                    <FiSearch  size="15" color="black"/>
                   </button> 
           <input type="text" autoComplete="off" autoFocus placeholder="Search images" name="search"/>     
           <Toaster />
                
        </form>
        </>
)
}

export default SearchBar;