import React, { Component } from 'react';
import Images from './components/Images';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id='root' className="bg-success">
        <div className='container bg-success'>
        <nav className="navbar navbar-light bg-success">
          <a className="navbar-brand text-light font-weight-bold font-italic p-auto m-auto" href="/">
            <img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPgo8bGluZWFyR3JhZGllbnQgaWQ9IlNWR0lEXzFfIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjI1NiIgeTE9IjUwNi43NzciIHgyPSIyNTYiIHkyPSItMS4zNyIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAwIDUxNCkiPgoJPHN0b3Agb2Zmc2V0PSIwIiBzdHlsZT0ic3RvcC1jb2xvcjojRjY0RTY4Ii8+Cgk8c3RvcCBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiM3NDM2OTUiLz4KPC9saW5lYXJHcmFkaWVudD4KPHBhdGggc3R5bGU9ImZpbGw6dXJsKCNTVkdJRF8xXyk7IiBkPSJNNTEyLDExOC4yM3YyNzUuNTRDNTEyLDQ1OS4wNyw0NTkuMDcsNTEyLDM5My43Nyw1MTJIMTE4LjIzQzUyLjkzLDUxMiwwLDQ1OS4wNywwLDM5My43NyAgVjExOC4yM0MwLDUyLjkzLDUyLjkzLDAsMTE4LjIzLDBoMjc1LjU0QzQ1OS4wNywwLDUxMiw1Mi45Myw1MTIsMTE4LjIzeiIvPgo8bGluZWFyR3JhZGllbnQgaWQ9IlNWR0lEXzJfIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjI1NiIgeTE9IjUwMi44OSIgeDI9IjI1NiIgeTI9IjIuNjgiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCA1MTQpIj4KCTxzdG9wIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6I0QwNDI1OCIvPgoJPHN0b3Agb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojNTEyRDZGIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxwYXRoIHN0eWxlPSJmaWxsOnVybCgjU1ZHSURfMl8pOyIgZD0iTTExOC4yMyw1MDhDNTUuMjQzLDUwOCw0LDQ1Ni43NTcsNCwzOTMuNzdWMTE4LjIzQzQsNTUuMjQzLDU1LjI0Myw0LDExOC4yMyw0aDI3NS41NCAgQzQ1Ni43NTcsNCw1MDgsNTUuMjQzLDUwOCwxMTguMjN2Mjc1LjU0QzUwOCw0NTYuNzU3LDQ1Ni43NTcsNTA4LDM5My43Nyw1MDhIMTE4LjIzeiIvPgo8bGluZWFyR3JhZGllbnQgaWQ9IlNWR0lEXzNfIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjI1MS43NCIgeTE9IjI2Mi4xMiIgeDI9IjQ5MS43NCIgeTI9IjIyLjEyIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDAgNTE0KSI+Cgk8c3RvcCBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiM1MzBCMzAiLz4KCTxzdG9wIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6IzZCMkQ0RDtzdG9wLW9wYWNpdHk6MCIvPgo8L2xpbmVhckdyYWRpZW50Pgo8cGF0aCBzdHlsZT0ib3BhY2l0eTowLjU7ZmlsbDp1cmwoI1NWR0lEXzNfKTtlbmFibGUtYmFja2dyb3VuZDpuZXcgICAgOyIgZD0iTTUxMiwyMzkuNjZ2MTU0LjExQzUxMiw0NTkuMDcsNDU5LjA3LDUxMiwzOTMuNzcsNTEyICBIMjM5LjM4TDExOS43NSwzOTIuMzdsMjcyLjQ4LTI3Mi40OEw1MDgsMjM1LjY2TDUxMiwyMzkuNjZ6Ii8+CjxwYXRoIHN0eWxlPSJvcGFjaXR5OjAuMztmaWxsOiMxQTFBMUE7ZW5hYmxlLWJhY2tncm91bmQ6bmV3ICAgIDsiIGQ9Ik00MDQuMDgzLDE0MS40OTljMC0xMy4wMjQtMTAuNTU4LTIzLjU4My0yMy41ODMtMjMuNTgzICBIMTQxLjQ5OWMtMTMuMDI0LDAtMjMuNTgzLDEwLjU1OC0yMy41ODMsMjMuNTgzdjIyNy42NjVjMCwwLjAwMSwwLDAuMDAyLDAsMC4wMDJ2MTEuMzM1YzAsNS4yOTEsMS43NDMsMTAuMTc2LDQuNjg2LDE0LjExICBjMS4zNTcsMS44MTYsMi45NzEsMy40MjksNC43ODYsNC43ODZjMy45MzUsMi45NDMsOC44MTksNC42ODYsMTQuMTExLDQuNjg2SDM4MC41YzUuMjkyLDAsMTAuMTc2LTEuNzQzLDE0LjExMS00LjY4NiAgYzEuODE2LTEuMzU4LDMuNDI5LTIuOTcxLDQuNzg2LTQuNzg2YzIuOTQzLTMuOTM1LDQuNjg2LTguODE5LDQuNjg2LTE0LjExdi0xMS4zMzR2LTAuMDAyVjE0MS40OTl6Ii8+CjxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSURfNF8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMjU1Ljk5OTUiIHkxPSI0MDAuNTIiIHgyPSIyNTUuOTk5NSIgeTI9IjExNS4wNSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAwIDUxNCkiPgoJPHN0b3Agb2Zmc2V0PSIwIiBzdHlsZT0ic3RvcC1jb2xvcjojQkFFQUYzIi8+Cgk8c3RvcCBvZmZzZXQ9IjAuOTk0IiBzdHlsZT0ic3RvcC1jb2xvcjojNUZDRUUyIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxwYXRoIHN0eWxlPSJmaWxsOnVybCgjU1ZHSURfNF8pOyIgZD0iTTM3NS41MDEsMzk5LjA4M0gxMzYuNDk5Yy0xMy4wMjQsMC0yMy41ODMtMTAuNTU4LTIzLjU4My0yMy41ODNWMTM2LjQ5OSAgYzAtMTMuMDI0LDEwLjU1OC0yMy41ODMsMjMuNTgzLTIzLjU4M0gzNzUuNWMxMy4wMjQsMCwyMy41ODMsMTAuNTU4LDIzLjU4MywyMy41ODNWMzc1LjUgIEMzOTkuMDgzLDM4OC41MjUsMzg4LjUyNSwzOTkuMDgzLDM3NS41MDEsMzk5LjA4M3oiLz4KPGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF81XyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIyNTYiIHkxPSIzOTguNTMiIHgyPSIyNTYiIHkyPSIxMTcuMDUiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCA1MTQpIj4KCTxzdG9wIG9mZnNldD0iMC4wMDYiIHN0eWxlPSJzdG9wLWNvbG9yOiM1RkNFRTIiLz4KCTxzdG9wIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6IzI5QUJFMiIvPgo8L2xpbmVhckdyYWRpZW50Pgo8cGF0aCBzdHlsZT0iZmlsbDp1cmwoI1NWR0lEXzVfKTsiIGQ9Ik0xMzYuNDk5LDM5Ny4wODNjLTExLjksMC0yMS41ODItOS42ODItMjEuNTgyLTIxLjU4MlYxMzYuNDk5ICBjMC0xMS45LDkuNjgyLTIxLjU4MiwyMS41ODItMjEuNTgyaDIzOS4wMDJjMTEuOSwwLDIxLjU4Miw5LjY4MiwyMS41ODIsMjEuNTgydjIzOS4wMDJjMCwxMS45LTkuNjgyLDIxLjU4Mi0yMS41ODIsMjEuNTgyICBMMTM2LjQ5OSwzOTcuMDgzTDEzNi40OTksMzk3LjA4M3oiLz4KPGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF82XyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIzMTAuODQiIHkxPSIyNDEuNDEiIHgyPSIzMTAuODQiIHkyPSIxMTQuOTgiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCA1MTQpIj4KCTxzdG9wIG9mZnNldD0iMC4wMDUiIHN0eWxlPSJzdG9wLWNvbG9yOiM4Qjg1MUYiLz4KCTxzdG9wIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6IzhBNjUyRSIvPgo8L2xpbmVhckdyYWRpZW50Pgo8cGF0aCBzdHlsZT0iZmlsbDp1cmwoI1NWR0lEXzZfKTsiIGQ9Ik0zOTkuMDgsMzIyLjA4djUzLjQyYzAsMTMuMDMtMTAuNTUsMjMuNTgtMjMuNTgsMjMuNThIMjIyLjZsMTI2Ljc0LTEyNi43NEwzOTkuMDgsMzIyLjA4eiIvPgo8bGluZWFyR3JhZGllbnQgaWQ9IlNWR0lEXzdfIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjI0Mi40MjUiIHkxPSIyNzYuMDMiIHgyPSIyNDIuNDI1IiB5Mj0iMTE1IiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDAgNTE0KSI+Cgk8c3RvcCBvZmZzZXQ9IjAuMDA1IiBzdHlsZT0ic3RvcC1jb2xvcjojQkRCNDJCIi8+Cgk8c3RvcCBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiNCQzhBM0UiLz4KPC9saW5lYXJHcmFkaWVudD4KPHBhdGggc3R5bGU9ImZpbGw6dXJsKCNTVkdJRF83Xyk7IiBkPSJNMzcxLjkzLDM5OS4wOEgxMzYuNWMtMTMuMDMsMC0yMy41OC0xMC41NS0yMy41OC0yMy41OHYtNDAuMjdsOTcuNTgtOTcuNThsMTYxLjQzLDE1MC4wOTcgIFYzOTkuMDh6Ii8+CjxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSURfOF8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMzEwLjg0IiB5MT0iMjUyLjc1IiB4Mj0iMzEwLjg0IiB5Mj0iMTI2LjMxIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDAgNTE0KSI+Cgk8c3RvcCBvZmZzZXQ9IjAuMDA1IiBzdHlsZT0ic3RvcC1jb2xvcjojQ0FDMTJEIi8+Cgk8c3RvcCBvZmZzZXQ9IjAuNzQ5IiBzdHlsZT0ic3RvcC1jb2xvcjojQzlBNjNBIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxwYXRoIHN0eWxlPSJmaWxsOnVybCgjU1ZHSURfOF8pOyIgZD0iTTM5OS4wOCwzMTAuNzQ3djUzLjQyYzAsMTMuMDMtMTAuNTUsMjMuNTgtMjMuNTgsMjMuNThIMjIyLjZsMTI2Ljc0LTEyNi43NEwzOTkuMDgsMzEwLjc0N3oiLz4KPGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF85XyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIzMTAuNzU0IiB5MT0iMjUyLjkyIiB4Mj0iMzEwLjc1NCIgeTI9IjEyOC4zMSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAwIDUxNCkiPgoJPHN0b3Agb2Zmc2V0PSIwLjAwNSIgc3R5bGU9InN0b3AtY29sb3I6I0NBQzEyRCIvPgoJPHN0b3Agb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojQzk5NDQzIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxwYXRoIHN0eWxlPSJmaWxsOnVybCgjU1ZHSURfOV8pOyIgZD0iTTIyNC40MjgsMzg1Ljc0N0wzNDkuMzQsMjYwLjgzNWw0Ny43NCw0Ny43NHY1NS41OTJjMCwxMS44OTktOS42ODEsMjEuNTgtMjEuNTgsMjEuNTggIEwyMjQuNDI4LDM4NS43NDdMMjI0LjQyOCwzODUuNzQ3eiIvPgo8bGluZWFyR3JhZGllbnQgaWQ9IlNWR0lEXzEwXyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIyNDIuNDI1IiB5MT0iMjg3LjM3IiB4Mj0iMjQyLjQyNSIgeTI9IjEyNi4zMyIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAtMSAwIDUxNCkiPgoJPHN0b3Agb2Zmc2V0PSIwLjAwNSIgc3R5bGU9InN0b3AtY29sb3I6I0ZDRjAzOSIvPgoJPHN0b3Agb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojRkJEMDQ4Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjxwYXRoIHN0eWxlPSJmaWxsOnVybCgjU1ZHSURfMTBfKTsiIGQ9Ik0zNzEuOTMsMzg3Ljc0N0gxMzYuNWMtMTMuMDMsMC0yMy41OC0xMC41NS0yMy41OC0yMy41OHYtNDAuMjdsOTcuNTgtOTcuNThMMzcxLjkzLDM4Ny43NDd6ICAiLz4KPGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8xMV8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMjQyLjUxMSIgeTE9IjI4Ny41NCIgeDI9IjI0Mi41MTEiIHkyPSIxMjguMzMiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCA1MTQpIj4KCTxzdG9wIG9mZnNldD0iMC4wMDUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGQ0YwMzkiLz4KCTxzdG9wIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6I0ZCQjk1MyIvPgo8L2xpbmVhckdyYWRpZW50Pgo8cGF0aCBzdHlsZT0iZmlsbDp1cmwoI1NWR0lEXzExXyk7IiBkPSJNMTM2LjUsMzg1Ljc0N2MtMTEuODk5LDAtMjEuNTgtOS42ODEtMjEuNTgtMjEuNTh2LTQyLjQ0Mmw5NS41OC05NS41OGwxNTkuNjAyLDE1OS42MDMgIEgxMzYuNVYzODUuNzQ3eiIvPgo8bGluZWFyR3JhZGllbnQgaWQ9IlNWR0lEXzEyXyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIyOTQuNDkiIHkxPSIzNTQuODEiIHgyPSIyOTQuNDkiIHkyPSIyODQuNDgiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCA1MTQpIj4KCTxzdG9wIG9mZnNldD0iMC4wMDYiIHN0eWxlPSJzdG9wLWNvbG9yOiM0RUFBQkEiLz4KCTxzdG9wIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6IzIyOERCQSIvPgo8L2xpbmVhckdyYWRpZW50Pgo8Y2lyY2xlIHN0eWxlPSJmaWxsOnVybCgjU1ZHSURfMTJfKTsiIGN4PSIyOTQuNDkiIGN5PSIxOTQuMyIgcj0iMzUuMjUiLz4KPGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8xM18iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMjkxLjI1IiB5MT0iMzU4LjA1IiB4Mj0iMjkxLjI1IiB5Mj0iMjg3LjcyIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDAgNTE0KSI+Cgk8c3RvcCBvZmZzZXQ9IjAuMDA1IiBzdHlsZT0ic3RvcC1jb2xvcjojQkVCNTJCIi8+Cgk8c3RvcCBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiNCRDhCM0UiLz4KPC9saW5lYXJHcmFkaWVudD4KPGNpcmNsZSBzdHlsZT0iZmlsbDp1cmwoI1NWR0lEXzEzXyk7IiBjeD0iMjkxLjI1IiBjeT0iMTkxLjA3IiByPSIzNS4yNSIvPgo8bGluZWFyR3JhZGllbnQgaWQ9IlNWR0lEXzE0XyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIyOTEuMjUiIHkxPSIzNjIuNzEiIHgyPSIyOTEuMjUiIHkyPSIyOTIuMzgiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCA1MTQpIj4KCTxzdG9wIG9mZnNldD0iMC4wMDUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGQ0YwMzkiLz4KCTxzdG9wIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6I0ZCQjk1MyIvPgo8L2xpbmVhckdyYWRpZW50Pgo8Y2lyY2xlIHN0eWxlPSJmaWxsOnVybCgjU1ZHSURfMTRfKTsiIGN4PSIyOTEuMjUiIGN5PSIxODYuNCIgcj0iMzUuMjUiLz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==" 
                 width="30" height="30" alt="Home" 
                 className="d-inline-block align-top mb-3 mr-2" />
            InfiniteInsta
          </a>
        </nav>
          <Images />
        </div>
      </div>
      );
    }
  }

export default App;