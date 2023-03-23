mod components;
use components::level0::custom_button::CustomButton;
use yew::prelude::*;

#[function_component]
pub fn App() -> Html {
    html! {
        <>
        <h1>{"Hi"}</h1>
        <CustomButton/>
        </>
    }
}
