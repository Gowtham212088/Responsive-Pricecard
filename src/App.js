import React from 'react';
import logo from './logo.svg';
import Switch from './Components/button';
import './App.css';


export default function App() {

  var cards = [
    {
      heading: "FREE",
      Rupees: `$ ${0}/month`,
      users: "✔ Single user",
      storage: "✔ 5GB Storage",
      projects: "✔ Unlimited Public Projects",
      Access: "✔ Community Access",
      private_project_limit: "✘ Unlimited Private Project",
      phone_support: "✘ Dedicated Phone Support",
      subdomain: "✘ Free Subdomain",
      report: "✘ Monthly Status Report",
      swi : "<button> </button>"
    },
    {
      heading: "PLUS",
      Rupees: `$ ${9}/month`,
      users: "✔ Single user",
      storage: "✔ 5GB Storage",
      projects: "✔ Unlimited Public Projects",
      Access: "✔ Community Access",
      private_project_limit: "✔ Unlimited Private Project",
      phone_support: "✔ Dedicated Phone Support",
      subdomain: "✔ Free Subdomain",
      report: "✘ Monthly Status Report",
      swi : "<button> </button>"
    },
    {
      heading: "PRO",
      Rupees: `$ ${49}/month`,
      users: "✔ Single user",
      storage: "✔ 5GB Storage",
      projects: "✔ Unlimited Public Projects",
      Access: "✔ Community Access",
      private_project_limit: "✔ Unlimited Private Project",
      phone_support: "✔ Dedicated Phone Support",
      subdomain: "✔ Unlimited Free Subdomain",
      report: "✔ Monthly Status Report",
    }
  ]
  return (

    <div className='App'>

      {cards.map((key) => {
        return <Pricecard
       
          head={key.heading}
          Rupee={key.Rupees}
          user={key.users}
          stor={key.storage}
          proj={key.projects}
          Acces={key.Access}
          project_limit={key.private_project_limit}
          support={key.phone_support}
          domain={key.subdomain}
          rep={key.report}
          
        />
       
      })}
      
    </div>

  )
}

function Pricecard(props) {
  return (
    <div className='container'>

      <h4 className='head'> {props.head} </h4>
      <h1> {props.Rupee} </h1> <hr />
      <h4 className='down-box'> {props.user} </h4>
      <h4 className='down-box'> {props.stor} </h4>
       <h4 className='down-box'> {props.proj} </h4>
       <h4 className='down-box'> {props.Acces} </h4>
      <h4 className='down-box'> {props.project_limit} </h4>
      <h4 className='down-box'> {props.support} </h4>
      <h4 className='down-box'> {props.domain} </h4>
       <h4 className='down-box'> {props.rep} </h4>
                <button> BUTTON </button>
    </div>
  )
}