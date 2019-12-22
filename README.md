# AspNetCore-issues-17613
- OS: Linux 5.4.3
- dotnet: 3.1.100 version
- browser: Chromium 79.0.3945.88 version

### Environments
- .NET Core 3.1
- noodejs and npm

### Dependencies
- .NET Core 3.1
- noodejs and npm

### Init
In project directory terminal:
```bash
$ dotnet restore
$ cd ./ClientApp
$ npm install
```

### To reproduce the issue
- In project directory terminal `dotnet run`

- open in browser http://localhost:5000/

- open browser console `Ctrl + Shift + J `
- click button `CONNECT TO HUB`

- make sure `Connected: yes`

- In project directory terminal `Ctrl + C`

- Wait 2 seconds

- In project directory terminal `dotnet run` again

- Error in browser console ...;
