import numpy as np
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import LSTM, Dense
from pretty_midi import PrettyMIDI, Instrument, Note

def create_model(input_dim, output_dim):
    """
    Create a simple LSTM-based music generation model.
    """
    model = Sequential([
        LSTM(128, input_shape=(None, input_dim), return_sequences=True),
        LSTM(128, return_sequences=False),
        Dense(output_dim, activation='softmax')
    ])
    model.compile(optimizer='adam', loss='categorical_crossentropy')
    return model

def generate_sequence(model, seed_sequence, length=100):
    """
    Generate a sequence of music using the AI model.
    """
    generated = np.array(seed_sequence)
    for _ in range(length):
        next_step = np.random.rand(1, 1, 50)  # Placeholder for model.predict
        generated = np.concatenate([generated, next_step], axis=1)
    return generated[0]

def sequence_to_midi(sequence, file_name="output.mid"):
    """
    Convert a generated sequence into a MIDI file.
    """
    midi = PrettyMIDI()
    instrument = Instrument(program=0)  # Piano
    start_time = 0.0

    for note_value in sequence[0]:
        pitch = max(0, min(127, int(note_value * 127)))  # Clamp to valid MIDI range
        note = Note(velocity=100, pitch=pitch, start=start_time, end=start_time + 0.5)
        instrument.notes.append(note)
        start_time += 0.5

    midi.instruments.append(instrument)
    midi.write(file_name)
