import { Component, h } from '@stencil/core';

@Component({
  tag: 'mrs-button',
  styleUrl: 'mrs-button.css',
  shadow: true,
})
export class MrsButton {

  render() {
    return (
      <button class="mrs-button">
        <slot></slot>
      </button>
    );
  }

}
