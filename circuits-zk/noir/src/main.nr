fn main(x_input: [i32; 30], y_expected: i32, weights: [i32; 30], bias: i32) {
    let mut acc: i32 = 0;
    for i in 0..30 {
        acc += x_input[i] * weights[i];
    }
    acc += bias;

    let prediction = if acc >= 0 { 1 } else { 0 };

    assert(prediction == y_expected);
}
