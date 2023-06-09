const actionTypes={
    bookActions:{
        GET_BOOKS_START:"GET_BOOKS_START",
        GET_BOOKS_SUCCESS:"GET_BOOKS_SUCCESS",
        GET_BOOKS_FAIL:"GET_BOOKS_FAIL",
        //Delete actions
        DELETE_BOOK_START:"DELETE_BOOK_START",
        DELETE_BOOK_SUCCESS:"DELETE_BOOK_SUCCESS",
        DELETE_BOOK_FAIL:"DELETE_BOOK_FAIL",
        //ADD ACTION
        ADD_BOOK:"ADD_BOOK",
        //EDIT ACTION
        EDIT_BOOK:"EDIT_BOOK"

    },
    categoryActions:{
        GET_CAT_START:"GET_CAT_START",
        GET_CAT_SUCCESS:"GET_CAT_SUCCESS",
        GET_CAT_FAIL:"GET_CAT_FAIL",
        //DELETE CAT
        DELETE_CAT_START:"DELETE_CAT_START",
        DELETE_CAT_SUCCESS:"DELETE_CAT_SUCCESS",
        DELETE_CAT_FAIL:"DELETE_CAT_FAIL",

        //ADD CAT
        ADD_CAT:"ADD_CAT",

        //EDIT CAT
        EDIT_CAT:"EDIT_CAT"
    }
}

export default actionTypes