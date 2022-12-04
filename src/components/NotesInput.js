import React from "react";
import Swal from "sweetalert2";

class NotesInput extends React.Component {
  constructor(props) {
    super(props);

    // Inisialisasi State
    this.state = {
      title: "",
      body: "",
      titleCharLimit: 50,
      titleCharRemaining: 50,
      show: false,
    };

    // Binding
    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    this.onResetEventHandler = this.onResetEventHandler.bind(this);
  }

  limitTitleChar(value, max) {
    if (value.length > max) {
      value = value.substring(0, max);
    }

    let remaining = max - value.length;

    return {
      value,
      remaining,
    };
  }

  onTitleChangeEventHandler(event) {
    const titleLimit = this.limitTitleChar(event.target.value, this.state.titleCharLimit);

    this.setState((prevState) => {
      return {
        ...prevState,
        title: titleLimit.value,
        titleCharRemaining: titleLimit.remaining,
      };
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();

    if (this.state.title.length === 0 || this.state.body.length === 0) {
      Swal.fire({
        icon: "warning",
        title: "Judul dan isi catatan harus diisi",
      });
    } else {
      this.props.addNote(this.state);
      this.onResetEventHandler(event);
      Swal.fire({
        icon: "info",
        title: "Catatan berhasil ditambahkan",
      });
    }
  }

  onResetEventHandler(event) {
    event.preventDefault();
    this.setState({
      title: "",
      body: "",
      titleCharLimit: 50,
      titleCharRemaining: 50,
    });
  }

  render() {
    return (
      <div className="note-input">
        <h2>Buat Catatan</h2>
        <form onSubmit={this.onSubmitEventHandler} onReset={this.onResetEventHandler}>
          <p className="note-input__title__char-limit">Sisa karakter: {this.state.titleCharRemaining}</p>
          <input className="note-input__title" type="text" placeholder="Ini adalah judul ..." value={this.state.title} onChange={this.onTitleChangeEventHandler} />
          <textarea className="note-input__body" type="text" placeholder="Tuliskan catatanmu di sini ..." value={this.state.body} onChange={this.onBodyChangeEventHandler}></textarea>
          <div className="note-input__action">
            <button type="submit" className="note-input__action-submit">
              Simpan
            </button>
            <button type="reset" className="note-input__action-reset">
              Reset
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default NotesInput;
