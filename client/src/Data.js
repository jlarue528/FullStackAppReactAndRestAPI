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
          options.body = JSON.stringify(body);
        }
    
        if(requiresAuth) {
          const encodedCredentials = btoa(`${credentials.emailAddress}:${credentials.password}`);
    
          options.headers['Authorization'] = `Basic ${encodedCredentials}`;
        }
    
        return fetch(url, options)
    }

    async getUserData(emailAddress, password) {
        const response = await this.api(`/users`, 'GET', null, true, { emailAddress, password});
        if (response.status === 200) {
            return response.json().then(data => data);
         }
          else if (response.status === 401) {
            return null;
          }
          else {
            throw new Error();
          }
      }


    async createUser(user, credentials) {
        const response = await this.api('/users', 'POST', user, true, credentials);
        if(credentials) {
            if (response.status === 201) {
                return [];
            } else if (response.status === 400) {
                return response.json().then(data => {
                  return data.errors;
                });
            }
        } else {
                throw new Error()
        }
    }

    async createCourse(course, credentials) {
        const response = await this.api('/courses', 'POST', course, true, credentials);
        if(credentials) {
            if (response.status === 201) {
                console.log('course created successfully');
              return [];
            } else if (response.status === 400) {
                return response.json().then(data => {
                    return data.errors;
                  });
            }
        } else {
            throw new Error();
        }
    }

    async updateCourse(course, id, emailAddress, password) {
        const credentials = {
            "emailAddress": emailAddress, 
            "password": password
        }
        const response = await this.api(`/courses/${id}`, 'PUT', course, true, credentials);
        // if(credentials) {
            if (response.status === 201) {
                console.log('course created successfully');
              return [];
            } else if (response.status === 400) {
                return response.json().then(data => {
                  return data.errors;
                });
            // }
        }  else {
            throw new Error();
        }
    }
}