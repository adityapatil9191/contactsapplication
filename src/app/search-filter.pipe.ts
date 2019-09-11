import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(contactList,searchTerm): any {
    if(!contactList || !searchTerm){
      return contactList
    }

    searchTerm = searchTerm.toLowerCase();

    return contactList.filter((contact)=>{
      return contact.firstName.toLowerCase().includes(searchTerm) || contact.lastName.toLowerCase().includes(searchTerm);
    })
}

}
