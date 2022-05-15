import React, { useState, useRef} from "react";
import Movies from "./Movies";
import OrderByAlphaButton from "./OrderByAlphaButton";
import OrderBYGradeButton from "./OrderByGradeButton";


export default function AddMovieForm() {
    const [movies, setMovies] = useState([{
        id: 1,
        title: "First Movie",
        rate: 5
    
    }]);

    const inputRef = useRef();
    const rateRef = useRef();

    function addMovie(event) {
       event.preventDefault();
       
       if (!inputRef.current.value) {
           alert("Please insert movie title!");
       }
       else if (rateRef.current.value == "0"){
           alert("Please rate the movie!");
       }
       else {
           const newId = movies.length > 0 ? movies[movies.length - 1].id +1 :1;

           setMovies([...movies, {
               id: newId,
               title: inputRef.current.value,
               rate: rateRef.current.value
           }]);

           inputRef.current.value = "";
           rateRef.current.value = "0";

       }

    }

    function deleteItem(id) {
        setMovies(movies.filter((item) => item.id !== id));

    }
    
    function orderByAlphaButton() {
        let sortedMovies = [...movies].sort((a,b) => {
            return a.title.localeCompare(b.title);
        });
       
        setMovies(sortedMovies);
    }

    function orderBYGradeButton() {
        let sortedGrade = [...movies].sort((a,b) => {
            return b.rate - a.rate;
        });

        setMovies(sortedGrade);

    }

    return (
        <div>
            <form onSubmit={addMovie}>
                <label>Titel:</label>
                <input type="text" className="form-control" placeholder="Tittel här..." ref={inputRef}/>
                
                <label>Betyg:</label>
                <select type="text" className="form-control" placeholder="Välje betyg här.."ref={rateRef}>
                    <option value="0">Välj betyg här...</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>

                <input type="submit" className="btn btn-success mt-3 mb-4" value="Spara film"/>

            </form>

            <h3>Inlagda filmer</h3>
            <ul className="list-group">
                { movies.map(movie => <Movies key={movie.id} item={movie} deleteItem={deleteItem}/>)}
            </ul>

            <div className="d-flex flex-row mt-3">
                <OrderByAlphaButton orderByAlphaButton={orderByAlphaButton} />
                <OrderBYGradeButton orderBYGradeButton={orderBYGradeButton} />
            </div>

        </div>
    )
}
