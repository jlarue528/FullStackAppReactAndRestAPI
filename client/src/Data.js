export default class Data {    
    api(path, method = 'GET', body = null, requiresAuth = false, credentials = null) {
        const url = `http://localhost:5000/api` + path;
    
        const options = {
          method,
          headers: {
            'Content-Type': 'application/json; charset=utf-8'
          }
        }
    
        if(body !== null) {
            console.log('made it to body', body);
          options.body = JSON.stringify(body);
        }
    
        if(requiresAuth) {
            console.log('made it to auth');
          const encodedCredentials = btoa(`${credentials.emailAddress}:${credentials.password}`);
    
          options.headers['Authorization'] = `Basic ${encodedCredentials}`;
        }
   
        return fetch(url, options)
    }

    async getUserData(emailAddress, password) {
        const response = await this.api(`/users`, 'GET', null, true, {emailAddress, password});
        if (response.status === 200) {
            return response.json().then(data => 
                data,
            );
         }
          else if (response.status === 401) {
            return null;
          }
          else {
            console.log(response);
            throw new Error();
          }
      }


    async createUser(user, emailAddress, password) {
        const response = await this.api('/users', 'POST', user, true, emailAddress, password);
            if (response.status === 201) {
                return [];
            } else if (response.status === 400) {
                return response.json().then(data => {
                  return data.errors;
                });
            } else {
                throw new Error()
        }
    }

    async createCourse(course, emailAddress, password) {
        const response = await this.api('/courses', 'POST', course, true, { emailAddress, password});
            if (response.status === 201) {
                console.log('course created successfully');
              return [];
            } else if (response.status === 400) {
                return response.json().then(data => {
                    return data.errors;
                  });
            }   else {
            console.log(response.status);
            throw new Error();
        }
    }

    async updateCourse(course, id, emailAddress, password) {
        const response = await this.api(`/courses/${id}`, 'PUT', course, true, {emailAddress, password});
        if (response.status === 204) {
            console.log('course created successfully');
            return [];
        } else if (response.status === 400) {
            return response.json().then(data => {
                console.log('errors', data.errors)
                return data.errors;
            });
        }  else {
            console.log('thrown errror', response.status)
            throw new Error();
        }
    }
}