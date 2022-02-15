import './AddMovie.css'

const AddMovie = () => {
    return (
        <section className="add-movie-section" >
            <h3 className='add-movie-section-title'>Add Movie</h3>
            <form className="add-movie-form">
                <p className="add-movie-field">
                    <label htmlFor="image">Image</label><br></br>
                    <input type="text" name="image" id="image" />
                </p>
                <p className="add-movie-field">
                    <label htmlFor="titleImage">Title Image</label><br></br>
                    <input type="text" name="titleImage" id="titleImage" />
                </p>
                <p className="add-movie-field">
                    <label htmlFor="thumbnailImage">Thumbnail Image</label><br></br>
                    <input type="text" name="thumbnailImage" id="thumbnailImage" />
                </p>
                <p className="add-movie-field">
                    <label htmlFor="title">Title</label><br></br>
                    <input type="text" name="title" id="title" />
                </p>
                <p className="add-movie-field">
                    <label htmlFor="description">Descritpion</label><br></br>
                    <input type="text" name="description" id="description" />
                </p>
                <p className="add-movie-field">
                    <label htmlFor="year">Year</label><br></br>
                    <input type="text" name="year" id="year" />
                </p>
                <p className="add-movie-field">
                    <label htmlFor="genre">Genre</label><br></br>
                    <input type="text" name="genre" id="genre" />
                </p>
                <p className="add-movie-field">
                    <label htmlFor="duration">Duration</label><br></br>
                    <input type="text" name="duration" id="duration" />
                </p>
                <p className="add-movie-field">
                    <label htmlFor="limit">Limit</label><br></br>
                    <input type="text" name="limit" id="limit" />
                </p>
                <p className="add-movie-field">
                    <label htmlFor="isSeries">Is Series?</label><br></br>
                    <select name='isSeries' id="isSeries">
                        <option defaultValue="Yes">Yes</option>
                        <option defaultValue="No">No</option>
                    </select>
                </p>
                <p className="add-movie-field trailer-section">
                    <label htmlFor="trailer">Trailer</label><br></br>
                    <input type="trailer" name="trailer" id="trailer" />
                </p>
                <input className="add-movie-button" type="submit" value="Add Movie" />
            </form>
        </section>
    )
}

export default AddMovie