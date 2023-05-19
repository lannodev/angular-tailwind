import { Server } from 'miragejs'

const tableDate = [
    {Id : 0, Name:"FirstName"},
    {Id : 1, Name:"FirstName1"},
    {Id : 2, Name:"FirstName2"},
    {Id : 3, Name:"FirstName3"}
];

export default () =>{
    new Server({
        seeds(server){
            server.db.loadData({
                tableDate
            })
        },
        routes() {
            this.get('/tableDate', schema => tableDate )
        },
    })
}