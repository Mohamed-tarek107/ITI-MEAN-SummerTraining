export function access(role:string){
    if(role == 'admin'){
        return 'success'
    }else {
        return 'fail'
    }
}